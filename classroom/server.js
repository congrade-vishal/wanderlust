const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({
    secret: "mysecretcode",
    resave: false,
    saveUninitialized: true,
}));
app.use(flash());

app.use((req, res, next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register", (req, res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    if(name === "anonymous"){
        req.flash("error", "Registation not successful");
    }else{
        req.flash("success", "Registation successful");
    }
    
    
    res.redirect("/hello");
});

app.get("/hello", (req,res)=>{
    res.render("page.ejs", {name: req.session.name});
})

app.listen(3000, ()=>{
    console.log("Server listening on post 3000");
});