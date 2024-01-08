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
            blogtype
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
        return NextResponse.json({ succuss: true, blog: blog }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}