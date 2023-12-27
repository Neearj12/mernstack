import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // Mongoose-specific options
            // useFindAndModify: false, // Deprecated in MongoDB driver
            // useCreateIndex: true // Deprecated in MongoDB driver
        });

        console.log(`Connected to MongoDB database on host ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
};

export default connectDB;
