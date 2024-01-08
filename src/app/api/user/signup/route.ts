import User from "../../../../models/Usermodel"
import connect from "../../../../db/connect.js"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: any) {
    connect()
    try {
        const reqbody = await req.json()
        const { fullname, email, password, phone } = reqbody
        const isUser = await User.findOne({ email })

        if (!fullname || !email || !password || !phone) {
            return NextResponse.json({ error: "All fields are required!" }, { status: 400 })
        }
        if (isUser) {
            return NextResponse.json({ error: "This email already exists!" }, { status: 400 })
        }
        const salt = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(password, salt)
        const saveUser = new User({
            fullname,
            email,
            password: hash_password,
            phone
        })
        await saveUser.save()

        return NextResponse.json({ success: true }, { status: 200 })


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}