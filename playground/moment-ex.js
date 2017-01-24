var moment = require('moment');

console.log(moment().format());

//jan 1st 1970 12:00am -> 0

var now = moment();
console.log("current timestamp", now.unix());

var timestamp = 1485287106;

currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format("MMM D, YY @ h:mm a"));


//January 3rd, 2017 @ 12:13 AM
console.log('current moment', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
