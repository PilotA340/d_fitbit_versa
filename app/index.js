import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { today } from "user-activity";
import { battery } from "power";
import { HeartRateSensor } from "heart-rate";
import { goals } from "user-activity";

// Get a handle on the <text> element
const time = document.getElementById("time");
const date = document.getElementById("date");
const bpm = document.getElementById("bpm");
const battery = document.getElementById("battery");
const steps1 = document.getElementById("steps1");
const steps2 = document.getElementById("steps2");

// Update the clock every second
clock.granularity = "seconds";

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = (hours);
  }
  let mins = (today.getMinutes());
  let sec = util.zeroPad(today.getSeconds());
  let x = (today.getMonth());
  if (x === 0) {
    let month = "01";
  }
  if (x === 1) {
    let month = "02";
  }
  if (x === 2) {
    let month = "03";
  }
  if (x === 3) {
    let month = "04";
  }
  if (x === 4) {
    let month = "05";
  }
  if (x === 5) {
    let month = "06";
  }
  if (x === 6) {
    let month = "07";
  }
  if (x === 7) {
    let month = "08";
  }
  if (x === 8) {
    let month = "09";
  }
  if (x === 9) {
    let month = "10";
  }
  if (x === 10) {
    let month = "11";
  }
  if (x === 11) {
    let month = "12";
  }
  let day = util.zeroPad(today.getDate());
  let year = (today.getFullYear());
  time.text = `${hours}:${mins}:${sec}`;
  date.text = `${month}-${day}-${year}`;
}

//heartrate
let hrm = new HeartRateSensor();
hrm.onreading = function() {
  bpm.text = ("BPM: " + hrm.heartRate);
}
hrm.start();

//battery
//battery.text = (Math.floor(battery.chargeLevel) + "%");
//^battery code^ ^gives NaN% when run^ need to figure it out

//steps
steps1.text = ( "Steps: ");
steps2.text = ((today.local.steps || 0) + "/" + (goals.steps || 0));