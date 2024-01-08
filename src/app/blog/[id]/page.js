"use client";

import { useEffect, useState } from "react"
import TopBar from "../../../components/top-bar/TopBar"
import Header from "../../../components/header/Header"

export default function Blog({ params }) {

    const [blog, setBlog] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/api/post?id=${params?.id}`)
    
                const result = await response.json()

                if(result?.success) {
                    setBlog(result?.blog)
                }
            }
            catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [params])

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <TopBar />
            <Header title="Blog" />
            <div className="w-[95%] my-20 flex-1 flex flex-col gap-20 overflow-y-auto scrollbar-none">
                <div className="text-3xl font-semibold">{blog?.title}</div>
                <div className="text-xl font-extralight">{blog?.content}</div>
            </div>
        </div>
    )
}