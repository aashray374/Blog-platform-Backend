const {CreateBlog,addLike,getBlogs} = require("../controllers/Blog");
const route = require("express").Router();

route.post("/",CreateBlog);
route.post("/like",addLike);
route.get("/",getBlogs);

module.exports = route;