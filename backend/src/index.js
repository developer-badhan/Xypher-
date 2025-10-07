import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import connectDB from "./config/db.js";

dotenv.config();


const app = express();
const port = process.env.PORT || 5000 ;

app.use(express.json());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/message",messageRouter);

app.listen(port,() => {
    console.log(`Server is running at :http://localhost:${port}`);
    connectDB();
});