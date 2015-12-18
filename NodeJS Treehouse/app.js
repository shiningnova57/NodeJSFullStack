var profile = require("./profile");
var users = process.argv.slice(2);
users.forEach(profile.get);
//use by doing "node app.js franklinlee"

//var users = ["chalkers","franklinlee"];  //array of users

//users.forEach(profile.get);  // prints out total badges and points for the users

//profile.get("franklinlee");

/*
users.forEach(function() {
  profile.get(username);
});
*/