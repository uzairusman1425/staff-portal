import mongoose from "mongoose"

function connect() {
    try {
        const uri = process.env.MONGODB_URI
        mongoose.connect(uri)
        const conection = mongoose.connection
        conection.on("connected", () => {
            console.log("connected...")
        })
        conection.on("error", (error) => {
            console.error(error.message)
        })
    } catch (error) {
        console.error(error.message)
    }
}

export default connect