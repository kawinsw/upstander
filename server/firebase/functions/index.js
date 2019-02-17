const functions = require('firebase-functions');
const https = require('https');
const admin = require("firebase-admin");
const db = admin.database();
const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://treehacks-2c696.firebaseio.com"
});

const accidentRef = db.ref('/accident');


function checkValidRequest(req) {
    console.log("Checking Request");
    console.log(req.body);
    if (!(req.body.msgType === 'request_help' || req.body.msgType === 'remove_request')) {
        return false;
    }
    if (!req.body.storageUrl) {
        return false;
    }
    return true;
}

exports.accident = functions.https.onRequest((request, response) => {
    if (request.method === 'GET') {
        response.send("Get request is not accepted. Please send a post request instead");   
    } else if (request.method === 'POST') {
        console.log(request.body);
        // check if input data is valid
        if (!checkValidRequest(request)) {
            response.send("invalid post request.");
        }
        // if help is needed
        if (request.body.msgType === 'request_help') {
            console.log("request help");
            https.get(request.body.storageUrl, function(res) {
                res.on('data', function(d) {
                    try {
                        const userData = JSON.parse(d.toString());
                        accidentRef.child(response.storageUrl).set(userData);
                        response.send("request submitted");
                    } catch (err) {
                        console.log(err);
                        response.send("Error parsing user data - " + err);
                    }
                });
            }).on('error', function(e) {
                console.error(e);
                response.send("Error with verification");
            });
        }

        // if request ask to be cancelled
        if (request.body.msgType === 'remove_request') {
            console.log("remove request")
            response.send("Request removed");
        }
    } else {
        console.log("malformed request");
        response.send("Your data is malformed.");
    }
});
