import express from "express"
import authRoutes from "./routes/auth.routes.js";
import customerRoutes from "./routes/customer.routes.js";
import postRoutes from "./routes/posts.routes.js";
import imageRoutes from "./routes/image.routes.js";
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