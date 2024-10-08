const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewere.js");
const userController = require("../controllers/users.js")


router.route("/signup")
.get(userController.randerSignupForm)
.post( wrapAsync(userController.signup));

router.route("/login")
.get(userController.randerLoginForm)
.post(saveRedirectUrl,  passport.authenticate("local", 
    {failureRedirect: "/login", failureFlash: true}), 
    userController.login
    );


router.get("/logout", userController.logout);






module.exports = router;