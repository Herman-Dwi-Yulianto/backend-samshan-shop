import express from "express"
import authRoutes from "./routes/auth_routes.js";
import userRoutes from "./routes/users_routes.js";
import postRoutes from "./routes/posts_routes.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express()
const port = 9090

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))