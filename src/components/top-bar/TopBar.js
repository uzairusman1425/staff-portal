"use client";

import { useRouter } from "next/navigation"

export default function TopBar() {

    const router = useRouter()

    return (
        <div className="min-h-24 w-full border border-b border-gray-100 rounded-b-3xl shadow-xl px-10 flex items-center justify-end">
            <button className="h-12 px-5 rounded-xl shadow-xl border border-gray-100 text-themeGray flex items-center justify-center transition ease-in-out duration-500 hover:bg-themeGray hover:text-white hover:border-none" onClick={() => {router.push("/your-ideas")}}>Your Ideas</button>
        </div>
    )
}