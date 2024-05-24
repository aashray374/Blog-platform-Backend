const {RegisterNewUser} = require("../controllers/RegisterUser");
const {LoginUser} = require("../controllers/LoginUser");
const {isValidRequest} = require("../middleware/auth");
const {viewProfile} = require("../controllers/ViewProfile")
const route = require("express").Router();


route.post("/register",RegisterNewUser);
route.get("/login",LoginUser);
route.get("/details",isValidRequest,viewProfile);


module.exports = route;