import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDatabase = async () => {
    try {
        const con = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`DB Connected Successfully! DB Host: ${con.connection.host}`);
    } catch (error) {
        console.log(`DB Connection Failed with error: ${error}`);
        process.exit(1);
    }
}

export default connectDatabase;