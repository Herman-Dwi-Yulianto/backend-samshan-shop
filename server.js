import express from "express"
import authRoutes from "./routes/auth_routes.js";
import customerRoutes from "./routes/customer_routes.js";
import postRoutes from "./routes/posts_routes.js";
import imageRoutes from "./routes/image_routes.js";
import cookieParser from "cookie-parser";

const app = express()
const port = 9090

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/image", imageRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})