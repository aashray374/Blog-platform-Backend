const express = require("express");
const {db} = require("./db/db");
const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blog");
const dotenv = require("dotenv");

const app = express();

// app.use(express.json({}));
app.use(express.json({
    extended:true
}));
dotenv.config({
    path: './Utils/constants.env'
});


db();

app.use("/blog/route",userRoutes);
app.use("/blog",blogRoutes);

app.listen(process.env.PORT , ()=>{
    console.log(`server ttarted on ${process.env.PORT}`);
});