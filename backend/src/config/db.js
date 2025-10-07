import moongose from "mongoose";

const connectDB = async () => {
    try{
        const connectionInstance = await moongose.connect(process.env.MONGODB_URI);
        console.log(`Server is connected to the ${connectionInstance.connection.host}`);
    } catch(err){
        console.warn("We got an error while connected to the database:".err);
    }
}

export default connectDB;

