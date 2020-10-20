const express = require("express");
const router = express.Router();
const {authentication} = require("../../middleware/authentication")
const {upload} = require("../../middleware/uploadFile");
//controller register & login
const {register,login,checkAuth} = require("../controller/auth");
//router auth register & login
router.post("/register", register);
router.post("/login",login);
router.get("/auth",authentication,checkAuth);

//controller user
const{
    read: getUsers,
    update: updateUser,
} = require("../controller/users");
//route user
router.get("/users", getUsers);
router.patch("/users/:id",authentication,upload('avatar'),updateUser)

//controller literatur
const {
    read: getLiterature, 
    create: storeLiterature,
    detail: detailLiterature,
} = require("../controller/literature");
//router
router.get("/literature", getLiterature);
router.get("/literature/:id",authentication,detailLiterature)
router.post("/literature", authentication,upload('literature'),storeLiterature)
module.exports = router;