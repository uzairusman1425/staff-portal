import connect from "../../../../db/connect.js"
import Jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import User from "../../../../models/Usermodel.js"

import { NextResponse } from "next/server.js"

export async function POST(req: any) {

    connect()
    try {
        const reqbody = await req.json()
        const { email, password } = reqbody

        const isuser = await User.findOne({ email })

        if (!email || !password) {
            return NextResponse.json({ error: "email and password required" }, { status: 400 })
        }
        console.log(isuser);

        if (!isuser) {
            return NextResponse.json({ error: "user dose not exist" }, { status: 400 })
        }
        const validpassword = await bcrypt.compare(password, isuser.password)
        if (!validpassword) {
            return NextResponse.json({ error: "wrong password" }, { status: 400 })
        }
        const tokenData = {
            id: isuser.id,
            fullname: isuser.fullname
        }

        const token = await Jwt.sign(tokenData, process.env.JSON_TOKEN)
        const response = NextResponse.json({ success: true, message: "login success", token: token }, { status: 200 })


        return response


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}