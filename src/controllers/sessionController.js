const admin = require('firebase-admin');
const firebase = require('firebase');

exports.session_create_assignment = (req, res) => {

    // admin.auth().getUser(uid)
    //   .then(function(userRecord) {
    //     // See the UserRecord reference doc for the contents of userRecord.
    //     console.log("Successfully fetched user data:", userRecord.toJSON());
    //   })
    //   .catch(function(error) {
    //     console.log("Error fetching user data:", error);
    //   });

    let topic = req.body.topic;
    let description = req.body.description;

    let responseObj = {
        "success" : "ok"
    }
    res.send(JSON.stringify(responseObj));
};