const express = require("express");
const app = express();
const path = require("path");
const PORT =  process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, "public");
app.set("view engine","hbs");
app.use(express.static(publicPath));
app.use("/lib", express.static(__dirname + '/lib'));
app.use("/scripts", express.static(__dirname + '/scripts'));


app.use(express.urlencoded({extended:false}));

app.use(function(req,res,next){

    console.log(req.method, req.path);
    console.log("==========");
    console.log("req.query ",req.query);
    console.log("req.body", req.body);
    console.log("\n");
    next();

});

app.get("/home",(req,res) => {
    res.render("home");
});



app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
});
