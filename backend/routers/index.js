const express = require("express");
const userRouter = require("./users");
const productRouter = require("./products");
const cartRouter = require("./carts");
const emailRouter = require("./emails");
const commentRouter = require("./comments");
const messengerRouter = require("./messengers");
const historyRouter = require("./history");

const rootRouter = express.Router();
const app = express();
const port = process.env.port || 3000;

app.get("/",(req, res)=>res.send("Hello world"));
app.get("/ping",(req, res)=>res.send("Pong"));
app.get("/felix",(req, res)=>res.send("Liawi"));

app.listen(port,()=>console.log('server is listening on port ${port}'));

rootRouter.use("/users", userRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/carts", cartRouter);
rootRouter.use("/emails", emailRouter);
rootRouter.use("/comments", commentRouter);
rootRouter.use("/messengers", messengerRouter);
rootRouter.use("/history", historyRouter);

module.exports = rootRouter;
