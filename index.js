const express = require("express");
const {db} = require("./db/db");

const app = express();

app.use(express.json());

db();

app.listen(process.env.PORT , ()=>{
    console.log(`server ttarted on ${process.env.PORT}`);
});