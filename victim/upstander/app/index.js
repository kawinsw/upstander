import { BodyPresenceSensor } from "body-presence";
import { Accelerometer } from "accelerometer";
import { vibration } from "haptics";
import { user } from "user-profile";
import document from "document";
import { outbox } from "file-transfer";
import { Image } from "image";
import * as messaging from "messaging";
import { display } from "display";

// Initialization
const accel = new Accelerometer();
const gravity_sq = 96;
let homescreen = document.getElementById("homescreen");
let cancelbtn = document.getElementById("cancel-btn");
let cancelmsg = document.getElementById("cancel-msg");
let medscreen = document.getElementById("med-screen");
let endbtn = document.getElementById("end-btn");
clearNotif();
clearEmergency();
var ticky;
var tocky;
var count;
var listening = true;
// setTimeout(function() { notif(); }, 1000);

messaging.peerSocket.onopen = function() {
  // Ready to send or receive messages
  console.log("ready to send message");
}

messaging.peerSocket.onerror = function(err) {
  // Handle any errors
  console.log("Connection error: " + err.code + " - " + err.message);
}

// Listening
accel.onreading = function() {
  if (!listening) {
    return;
  }
  let total_force_sq = accel.x * accel.x + accel.y * accel.y + accel.z * accel.z;
  if (total_force_sq > gravity_sq * 10) {
    console.log(total_force_sq);
    setTimeout(function() { checkStill(); }, 3000);
    listening = false;
  }
}
accel.start();


// Pre-activation

function checkStill() {
  count = 0;
  tocky = setInterval(function() { checkStillHelper() }, 50);
}

function checkStillHelper() {
  let total_force_sq = accel.x * accel.x + accel.y * accel.y + accel.z * accel.z - gravity_sq;
  console.log(total_force_sq);
  if (total_force_sq > 10) {
    clearInterval(tocky);
    listening = true;
  }
  count += 1;
  if (count > 50) {
    clearInterval(tocky);
    notif();
  }
}

function notif() {
  display.autoOff = false;
  display.on = true;
  vibration.start("alert");
  clearHomescreen();
  showNotif();
  ticky = setTimeout(function() { emergency(); }, 7500);
}

cancelbtn.onactivate = function() {
  fakeAlarm();
  console.log("cancelled");
}

function fakeAlarm() {
  clearTimeout(ticky);
  clearNotif();
  showHomescreen();
  vibration.stop();
  listening = true;
  display.autoOff = true;
}


// Activation

function emergency() {
  clearNotif();
  showEmergency();
  setTimeout(function() { alert911(); }, 1000);
  console.log("Emergency!");
}

function alert911() {
  var data = {"type": "request"};
  console.log(messaging.peerSocket.readyState === messaging.peerSocket.OPEN);
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
      messaging.peerSocket.send(data);
      
    console.log("called 911");
  }
}

endbtn.onactivate = function() {
  refresh();
  console.log("ended")
}

function refresh() {
  clearEmergency();
  showHomescreen();
  removeRequest();
  vibration.stop();
  listening = true;
  display.autoOff = true;
}

function removeRequest() {
  var data = {"type": "remove"};
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}


// Changing of display

function showHomescreen() {
  homescreen.style.display = "inline";
}

function clearHomescreen() {
  homescreen.style.display = "none";
}

function showNotif() {
  cancelbtn.style.display = "inline";
  cancelmsg.style.display = "inline";
}

function clearNotif() {
  cancelbtn.style.display = "none";
  cancelmsg.style.display = "none";
}

function showEmergency() {
  medscreen.style.display = "inline";
}

function clearEmergency() {
  medscreen.style.display = "none";
}


/*
function msAgoToString(msAgo) {
  let t = Math.round(msAgo / 1000);
  String shown = t % 60 + "s ago";
  t < 60 ? return shown;
  t = Math.floor(t / 60);
  shown = t % 60 + "min " + shown;
  t < 60 ? return shown;
  shown = Math.floor(t / 60) + "h " + shown;
  return shown;
}
*/

