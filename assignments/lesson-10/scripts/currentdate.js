//print date: Day, Date Month Year
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()] + ",";
document.getElementById("date").innerHTML = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.getElementById("month").innerHTML = months[d.getMonth()];
document.getElementById("year").innerHTML = d.getFullYear();