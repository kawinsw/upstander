/*
 * Entry point for the companion app
 */
const private_storage_url = "https://hub.blockstack.org/store/13ftGKHKbT6aCvMxaK4GmdpaqTLwtYjjNS/upstander.json";
const storage_headers = {
  "Content-Type": "text/plain; charset=utf-8",
  "Authorization": "bearer v1:eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJnYWlhQ2hhbGxlbmdlIjoiW1wiZ2FpYWh1YlwiLFwiMjAxOVwiLFwic3RvcmFnZTIuYmxvY2tzdGFjay5vcmdcIixcImJsb2Nrc3RhY2tfc3RvcmFnZV9wbGVhc2Vfc2lnblwiXSIsImh1YlVybCI6Imh0dHBzOi8vaHViLmJsb2Nrc3RhY2sub3JnIiwiaXNzIjoiMDM5ZmI3N2ZlOWZiZDA3ZmY0NWMxYWFkZTg1M2M3OWZlYzYwZjc0MzJhNDMxMDFjNDliOGZlMjI5ODkzOGJkOTVkIiwic2FsdCI6IjdhZGRiNDM0NWFjYTA3NTdmMTE0MzIyZTRkYTE4Zjc2In0.j9godfrmOpV-BJv-jzbXqvbEoGkACCEK_RhnT1dytc-M9RPkrW16XjT3EmaGlzD33EfAeHvtuuowZw09CR0V2g"
};
const firebase_cloud_url = "https://us-central1-treehacks-2c696.cloudfunctions.net/accident";
import * as messaging from "messaging";
import { geolocation } from "geolocation";

messaging.peerSocket.onmessage = function(evt) {
  console.log("at least i'm here");
  console.log(evt.data);
  if (evt.data.type == "request") {
    console.log("requested");
    const data = {
      "name": "Spong",
      "location": {
        "lat": 37.427730,
        "lng": -122.173996
      },
      "injury": "High impact accident"
    };
    updateBlockstack(data, false);
  } else if (evt.data.type == "remove") {
    const data = {};
    updateBlockstack(data, true);
  }
}

function updateBlockstack (data, remove) {
  fetch(private_storage_url, {
    method: 'POST',
    headers: storage_headers,
    body: JSON.stringify(data)
  }).then(function(response) {
    return response.text();
  }).then(function(text) {
    console.log("Got JSON response from server: " + text);
    var fbData = { userId: "spong123" };
    if (remove) {
      fbData["msgType"] = "remove_request";
    } else {
      fbData["msgType"] = "request_help";
      fbData["storageUrl"] = JSON.parse(text).publicURL;
    }
    updateFirebase(fbData);
  });
}

function updateFirebase (data) {
  fetch(firebase_cloud_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function(response) {
    return response.text();
  }).then(function(text) {
    console.log("Firebase updated: " + text);
  });
}