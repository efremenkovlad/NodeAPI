const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user.controller");
const { checkJWT } = require("../utils/auth");

router.get("/jwt", checkJWT);
router.post("/login", user_controller.userLogin);
router.post("/signup", user_controller.userSignup);

router.get("/all", user_controller.users_get);
router.delete("/:id", user_controller.user_delete);

module.exports = router;
