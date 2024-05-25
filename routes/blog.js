const {CreateBlog,addLike} = require("../controllers/Blog");
const route = require("express").Router();

route.post("/",CreateBlog);
route.post("/like",addLike);

module.exports = route;