"use client";

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import TopBar from "../../components/top-bar/TopBar"
import Header from "../../components/header/Header"
import FeaturedBlogCard from "../../components/featured-blog-card/FeaturedBlogCard"
import BlogCard from "../../components/blog-card/BlogCard"

export default function ResearchIdeas() {

    const [blogTitle, setBlogTitle] = useState("")
    const [blogContent, setBlogContent] = useState("")
    const [blogs, setBlogs] = useState([])
    const [accessToken, setAccessToken] = useState(null)

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) {
            router.push("/")
        }
        else {
            setAccessToken(token)
        }
    }, [router])

    useEffect(() => {
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

        fetchData()

    }, [])

    function checkBlogType(blog) {
        return blog?.blogtype === "research idea"
    }

    async function postBlog(e) {

        e.preventDefault()

        const body = {
            token: accessToken,
            title: blogTitle,
            content: blogContent,
            blogtype: "research idea"
        }

        try {
            const response = await fetch("/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })

            const result = await response.json()

            if(result?.success) {
                setBlogContent("")
                setBlogTitle("")
                alert(result?.message)
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
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <TopBar />
            <Header title="All Research Ideas" />
            <div className="flex flex-col gap-10 w-[85%] my-10 overflow-y-auto scrollbar-none">
                <div className="min-h-64 w-full border-2 border-themeGray rounded-xl p-5 flex flex-col gap-5">
                    <div className="w-full flex flex-row items-center gap-5">
                        <div className="text-lg">Title:</div>
                        <input type="text" value={blogTitle} onChange={(e) => {setBlogTitle(e.target.value)}} style={{outline: "none", width: "100%", borderBottom: "1px solid #000000"}} />
                    </div>
                    <textarea className="flex-1" style={{outline: "none"}} value={blogContent} placeholder="Write an idea..." onChange={(e) => {setBlogContent(e.target.value)}} />
                    <button className="h-10 w-24 rounded bg-blue-800 self-end text-lg font-semibold text-white" onClick={postBlog}>Post</button>
                </div>
                {blogs?.length > 0 && <FeaturedBlogCard id={blogs[0]?._id} name={blogs[0]?.username || "User"} email={blogs[0]?.email} date={blogs[0]?.createdAt?.slice(0, 10)} title={blogs[0]?.title} content={blogs[0]?.content} />}
                <div className="w-full grid grid-cols-2 gap-20 mt-10">
                    {blogs?.map((item, key) => {
                        if(key !== 0) {
                            return (
                                <BlogCard id={item?._id} name={item?.username || "User"} email={item?.email} date={item?.createdAt?.slice(0, 10)} title={item?.title} content={item?.content} key={key} />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}