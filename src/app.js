const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// routes for api
const api = require('./routes/api.js');


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

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({extended:false}));

app.use('/api', api);

app.use(function(req,res,next){

    console.log(req.method, req.path);
    console.log("==========");
    console.log("req.query ",req.query);
    console.log("req.body", req.body);
    console.log("\n");
    next();

});

app.get('/',(req,res) => {


});



app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
});
