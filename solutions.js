console.log("potpourri and madlibs");

//=================================================
// Set Alarm
//=================================================

function setAlarm(employed, vacationing) {
   return employed && !vacationing;
}

console.log(setAlarm(true, true)); // false
console.log(setAlarm(true, false)); // true
console.log(setAlarm(false, true)); // false
console.log(setAlarm(true, false)); // true