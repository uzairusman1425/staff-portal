"use client";

import { useEffect, useState } from "react"
import TopBar from "../../components/top-bar/TopBar"
import Header from "../../components/header/Header"
import DeletableBlogCard from "../../components/deletable-blog-card/DeletableBlogCard"

export default function YourIdeas() {

    const [blogs, setBlogs] = useState([])
    const [userSession, setUserSession] = useState(null)

    useEffect(() => {

        function checkBlogType(blog) {
            return blog?.email === userSession?.email
        }

        async function fetchData() {
            try {
                const response = await fetch("/api/post")
    
                const result = await response.json()

                if(result?.success) {
                    setBlogs(result?.data?.filter(checkBlogType)?.reverse())
                }
            }
            catch (error) {
                console.error(error)
            }
        }

        if(userSession?.token?.length > 0) {
            fetchData()
        }
    }, [userSession])

    useEffect(() => {
        const session = JSON.parse(localStorage.getItem("session"))
        if(!session?.token) {
            router.push("/")
        }
        else {
            setUserSession(session)
        }
    }, [])

    async function refreshPage() {

        function checkBlogType(blog) {
            return blog?.email === userSession?.email
        }

        try {
            const response = await fetch("/api/post")

            const result = await response.json()

            if(result?.success) {
                setBlogs(result?.data?.filter(checkBlogType)?.reverse())
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <TopBar />
            <Header title="Your Ideas" />
            <div className="flex-1 flex flex-col gap-10 w-[85%] my-10 overflow-y-auto scrollbar-none">
                {blogs?.map((item, key) => {
                    return (
                        <DeletableBlogCard id={item?._id} name={item?.username} email={item?.email} date={item?.createdAt?.slice(0, 10)} title={item?.title} content={item?.content} refreshPage={refreshPage} key={key} />
                    )
                })}
            </div>
        </div>
    )
}