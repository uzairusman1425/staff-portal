import User from "../../../../models/Usermodel";
import connect from "../../../../db/connect.js";
import bcrypt from 'bcrypt'
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    connect()
    try {
        const reqbody = await req.json()
        const { fullname, email, password, phone } = reqbody
        const isUser = await User.findOne({ email })

        if (!fullname || !email || !password || !phone) {
            return NextResponse.json({ error: "all fileds are requird " }, { status: 400 })
        }
        if (isUser) {
            return NextResponse.json({ error: "email exist already" }, { status: 400 })
        }
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt)
        const saveUser = new User({
            fullname,
            email,
            password: hashpassword,
            phone
        })
        const save = await saveUser.save()

        return NextResponse.json({ success: true, Data: save }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}