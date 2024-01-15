// models/BlogModel.js
import mongoose, { Schema, model } from "mongoose"

const validBlogTypes = ["active idea", "research idea"]

const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
    },
    content: {
        type: String,
        required: [true, "Content is required!"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    username: {
        type: String
    },
    blogtype: {
        type: String,
        enum: validBlogTypes,
        required: [true, "Blog type is required!"]
    },
    email: {
        type: String,
        required: [true, " email is required!"]

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Blog = mongoose.models.Blog || model("Blog", BlogSchema)

export default Blog
