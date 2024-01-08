"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function Login() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleLogin(e) {

        e.preventDefault()

        const body = {
            email: email,
            password: password
        }

        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })

            const result = await response.json()

            if(result?.success === true) {
                localStorage.setItem("token", result?.token)
                router.push("/home")
            }
            else {
                setError(result?.error)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="h-screen w-screen grid grid-cols-2">
            <div className="flex items-center justify-center">
                <Image src="/images/bg-image.png" alt="staff-portal" height={500} width={500} />
            </div>
            <div className="flex flex-col gap-10 items-center justify-center">
                <div className="text-5xl font-semibold font-poppins text-themeGray">Welcome Back!</div>
                <div className="flex flex-col gap-5 w-8/12">
                    <div className="text-xl font-semibold font-sora text-themeDarkGray">Email</div>
                    <div className="h-16 w-full rounded-xl border border-themeGray flex items-center justify-center px-5">
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your email" style={{outline: "none", width: "100%"}} />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-8/12">
                    <div className="text-xl font-semibold font-sora text-themeDarkGray">Password</div>
                    <div className="h-16 w-full rounded-xl border border-themeGray flex items-center justify-center px-5">
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your password" style={{outline: "none", width: "100%"}} />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-3 w-8/12">
                    <div className="text-lg font-semibold text-themeGray">Dont{"'"}t have an account?</div>
                    <Link href="/signup" className="text-lg font-semibold text-themeDarkGray">Signup</Link>
                </div>
                {error && <div className="text-lg font-semibold text-red-500">{error}</div>}
                <button className="flex items-center justify-center h-16 w-8/12 rounded-xl bg-themeGray" onClick={handleLogin}>
                    <div className="text-2xl font-semibold text-white">Login</div>
                </button>
            </div>
        </div>
    )
}
