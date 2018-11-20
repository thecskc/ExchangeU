const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const publicPath = path.resolve(__dirname, "public");
app.set("view engine","hbs");
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}));

app.use(function(req,res,next){

    console.log(req.method, req.path);
    console.log("==========");
    console.log("req.query ",req.query);
    console.log("req.body", req.body);
    console.log("\n");
    next();

});

app.get("/",(req,res)=>{
    res.redirect("/home");
});

app.get("/home",(req,res)=>{
    res.render("home");
});



app.listen(3000);
