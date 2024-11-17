window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script23 = function()
{
  var currentTime = new Date()
var year = currentTime.getFullYear()
var dateString=year
var player = GetPlayer();
player.SetVar("SystemYear",dateString);
}

window.Script24 = function()
{
  let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Putting it together
let dateString = month + "/" + day + "/" + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
}

};
