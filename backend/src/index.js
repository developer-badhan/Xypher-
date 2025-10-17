import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";               // <- add this
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import connectDB from "./config/db.js";
import { ENV } from "./config/env.js";

const app = express();
const port = ENV.PORT || 3000;

const devOrigin = "http://localhost:5173";

app.use(
  cors({
    origin: devOrigin,
    credentials: true, // Allow cookies
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/message", messageRouter);

app.listen(port, () => {
  console.log(`Server is running at :http://localhost:${port}`);
  connectDB();
});
