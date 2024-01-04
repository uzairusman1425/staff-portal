import mongoose from "mongoose";

function connect() {
    try {
        const uri = process.env.MONGODB_URI
        mongoose.connect(uri)
        const conection = mongoose.connection
        conection.on('connected', () => {
            console.log('connected');
        })
        conection.on('error', (error) => {
            console.log(error.message);
        })

    } catch (error) {

        console.log(error.message);

    }
}

export default connect