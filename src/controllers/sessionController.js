const admin = require('firebase-admin');
const firebase = require('firebase');

var db = admin.firestore();

exports.session_create_assignment = (req, res) => {

    let user = {};
    let userEmail = "";

    admin.auth().getUser(req.body.uid)
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        user.name =  userRecord.displayName;
        userEmail = userRecord.email;
        console.log(userEmail);

        console.log("Successfully fetched user data:", userRecord.toJSON());
      })
      .catch(function(error) {
        console.log("Error fetching user data:", error);
      });


    user.topic = req.body.topic;
    user.description = req.body.description;
    user.date = req.body.date;
    user.links = req.body.links;
    user.uid = req.body.uid;
    user.createdAt = admin.firestore.Timestamp.now();




    var docRef = db.collection('users').doc();

    var setUser = docRef.set(user);


    let responseObj = {
        "success" : "ok"
    }
    res.send(JSON.stringify(responseObj));
};