import mongoose from "mongoose"

function connect() {
    try {
        const uri = process.env.MONGODB_URI
        mongoose.connect(uri)
        const connection = mongoose.connection
        connection.on("connected", () => {
            console.log("Database connected...")
        })
        connection.on("error", (error) => {
            console.error(error.message)
        })
    } catch (error) {
        console.error(error.message)
    }
}

export default connect