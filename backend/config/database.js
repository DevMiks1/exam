const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connecting to DB ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error Connecting to DB ${error.message}`);
    }
}

module.exports = connectDB