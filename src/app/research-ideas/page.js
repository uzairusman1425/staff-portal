"use client";

import { useState } from "react"
import TopBar from "../../components/top-bar/TopBar"
import Header from "../../components/header/Header"
import FeaturedBlogCard from "../../components/featured-blog-card/FeaturedBlogCard"
import BlogCard from "../../components/blog-card/BlogCard"

export default function ResearchIdeas() {

    const [blogContent, setBlogContent] = useState("")

    const featuredBlog = {
        id: 10,
        name: "Olivia Rhye",
        date: "1 Jan 2023",
        title: "Grid system for better Design User Interface",
        content: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate."
    }

    const blogs = [
        {
            id: 1,
            name: "Amit Das",
            date: "4 days ago",
            title: "Melody mobile app: a UI UX case study",
            content: "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio..."
        },
        {
            id: 2,
            name: "Amit Das",
            date: "4 days ago",
            title: "Melody mobile app: a UI UX case study",
            content: "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio..."
        },
        {
            id: 3,
            name: "Amit Das",
            date: "4 days ago",
            title: "Melody mobile app: a UI UX case study",
            content: "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio..."
        },
        {
            id: 4,
            name: "Amit Das",
            date: "4 days ago",
            title: "Melody mobile app: a UI UX case study",
            content: "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio..."
        }
    ]

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <TopBar />
            <Header title="All Research Ideas" />
            <div className="flex flex-col gap-10 w-[85%] my-10 overflow-y-auto scrollbar-none">
                <div className="min-h-64 w-full border-2 border-themeGray rounded-xl p-5 flex flex-col gap-5">
                    <textarea className="flex-1" style={{outline: "none"}} value={blogContent} placeholder="Write a an idea..." onChange={(e) => {setBlogContent(e.target.value)}} />
                    <button className="h-10 w-24 rounded bg-blue-800 self-end text-lg font-semibold text-white">Post</button>
                </div>
                <FeaturedBlogCard id={featuredBlog?.id} name={featuredBlog?.name} date={featuredBlog?.date} title={featuredBlog?.title} content={featuredBlog?.content} />
                <div className="w-full grid grid-cols-2 gap-20 mt-10">
                    {blogs?.map((item, key) => {
                        return (
                            <BlogCard id={item?.id} name={item?.name} date={item?.date} title={item?.title} content={item?.content} key={key} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}