

var url = "";
var windowdata = {};

chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);

  windowdata = {
  	url: alarm.name.split("|||")[1]
  };

  chrome.windows.create(windowdata);



});
