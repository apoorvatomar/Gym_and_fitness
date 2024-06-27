// require("dotenv").config(); isko bad main use krunga knuki abhi ye chal nhi rha he sahi se
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const ConnectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/constact-router");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); //middleware to parse json data in the request  body
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

/* app.get("/",(req,res)=>{
    res.status(200).send("Hello, My dear friends My name is Rahul Kushwaha.Done ok");
});

app.get("/reg",(req,res)=>{
    res.status(200).send("Hello, My dear friends My name is Rahul Kushwaha.This is register. ");
}); */

const PORT = 5000;
ConnectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
