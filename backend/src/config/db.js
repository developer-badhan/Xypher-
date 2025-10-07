import moongose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
    try{
        const connectionInstance = await moongose.connect(ENV.MONGODB_URI);
        console.log(`Server is connected to the ${connectionInstance.connection.host}`);
    } catch(err){
        console.warn("We got an error while connected to the database:".err);
    }
}

export default connectDB;

