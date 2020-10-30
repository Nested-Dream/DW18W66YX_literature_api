const express = require("express");
const router = express.Router();
const { authentication } = require("../../middleware/authentication");
const { upload } = require("../../middleware/uploadFIle");
//controller register & login
const { register, login, checkAuth } = require("../controller/auth");
//router auth register & login
router.post("/register", register);
router.post("/login", login);
router.get("/auth", authentication, checkAuth);

//controller user
const {
  read: getUsers,
  update: updateUser,
  specific: specificUser,
} = require("../controller/users");
//route user
router.get("/users", getUsers);
router.get("/user/:id", authentication, specificUser);
router.patch("/users/:id", authentication, upload("avatar"), updateUser);

//controller literatur
const {
  read: getLiterature,
  create: storeLiterature,
  detail: detailLiterature,
  update: updateLiterature,
  filteryear: literatureByYear,
  filterTitle: literatureByTitle,
  search: searchLiterature,
  delete: deletLiterature,
} = require("../controller/literature");
//router
router.get("/literature", getLiterature);
router.get("/literature/:id", authentication, detailLiterature);
router.get("/literatures/:year", authentication, literatureByYear);
router.get("/filterLiterature/:title", authentication, literatureByTitle);
router.get("/searchLiterature/:title/:year", authentication, searchLiterature);
router.patch("/literature/:id", authentication, updateLiterature);
router.post(
  "/literature",
  authentication,
  upload("literature"),
  storeLiterature
);
router.delete("/literature/:id", authentication, deletLiterature);

//controller relations
const {
  read: getRelations,
  create: storeRelation,
  detail: detailRelation,
  delete: deletRelation,
} = require("../controller/relations");
//router relations
router.get("/relation", getRelations);
router.get("/relation/:id", authentication, detailRelation);
router.post("/relation", authentication, storeRelation);
router.delete("/relation/:LiteratureId/:UserId", authentication, deletRelation);

module.exports = router;
