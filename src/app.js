const express = require("express");
const app = express();
const path = require("path");

const admin = require('firebase-admin');

const pathToServiceAcc = path.join(__dirname,"/serviceaccountcred.json");
const serviceAccount = require(pathToServiceAcc);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://exchangeuni.firebaseio.com'
});


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

    admin.auth().getUser(uid).then(function(userRecord){
        console.log(userRecord);
        res.render("home");
    })
        .catch(function(error){
            console.log(error);
        });

});



app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
});
