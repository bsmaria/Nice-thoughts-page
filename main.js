var btn = document.getElementById("random");
var board = document.getElementById("nice-thoughts");
var btext = document.getElementById("text");

const phrases = ["So friends can really be a strenght in our lives, you know? Keep them close, you don't wanna be weak without them.",
"Productivity is over rated, peace of mind underapreciated.",
"There really is no preasure to do anything, Try not to rush, take your time.",
"That bad thing your constantly thinking? Stop it, man, have an ice cream, damn it.",
"Dude... Is ok.",
"There's time for everything you want to do.",
"Take 5 minutes to just breath, then go at it again.",
"Have a cup of tea, incredibly, it does help.",
"Life can be awfull, but we're together in it.",
"Let's be sad together, that's nice."];


btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * 10);
    btext.innerHTML = phrases[random];
});