const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hi i am Root!");
});

app.listen(3000, ()=>{
    console.log("Server listening on post 3000");
});