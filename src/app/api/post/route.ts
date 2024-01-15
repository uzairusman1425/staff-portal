import User from "../../../models/Usermodel"
import Blog from "../../../models/BlogModel"
import Jwt, { JwtPayload } from "jsonwebtoken"
import connect from "../../../db/connect"
import { NextResponse } from "next/server"

export async function POST(req: any) {
    connect()
    try {
        const reqbody = await req.json()
        const { token, title, content, blogtype } = reqbody
        if (!token || !title || !content || !blogtype) {
            return NextResponse.json({ error: "Token, title, blogtype and content are required." }, { status: 400 })
        }

        const decodedToken = Jwt.verify(token, process.env.JSON_TOKEN) as JwtPayload
        const id = decodedToken.id
        const isuser = await User.findById(id)
        if (!isuser) {
            return NextResponse.json({ error: "User not found!" }, { status: 400 })
        }


        const newBlog = new Blog({
            title,
            content,
            user: isuser._id,
            username: isuser.fullname,
            blogtype,
            email: isuser.email
        })

        const dave = await newBlog.save()

        const response = NextResponse.json({ success: true, message: "Blog posted successfully!", data: dave }, { status: 200 })

        return response

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET(req: any) {
    connect()
    try {
        const id = await req.nextUrl.searchParams.get('id')
        if (!id) {
            const blog = await Blog.find()
            if (!blog) {
                return NextResponse.json({ error: 'Blog not found!' }, { status: 400 })
            }
            return NextResponse.json({ success: true, data: blog }, { status: 200 })
        }
        const blog = await Blog.findById(id)
        if (!blog) {
            return NextResponse.json({ error: 'Blog not found!' }, { status: 400 })
        }
        return NextResponse.json({ success: true, blog: blog }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


export async function DELETE(req: any) {
    await connect();
    try {

        const { token, id } = await req.json();
        if (typeof token !== 'string') {
            return NextResponse.json({ error: 'Invalid token format' }, { status: 400 });
        }
        const user = await Jwt.verify(token, process.env.JSON_TOKEN) as JwtPayload;



        if (!id) {
            return NextResponse.json({ error: 'Invalid or missing ID parameter' }, { status: 400 });
        }
        const blog = await Blog.findById(id);


        if (!blog) {
            return NextResponse.json({ error: 'Blog not found!' }, { status: 400 });
        }


        if (user.email !== blog.email) {
            return NextResponse.json({ error: "User can only delete their own post" }, { status: 403 });
        }

        const deleted = await Blog.findByIdAndDelete(blog.id)

        return NextResponse.json({ success: true, Deleted: deleted }, { status: 200 });
    } catch (error) {

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}






