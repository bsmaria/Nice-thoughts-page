const btn = document.getElementById("random-quote");
const board = document.getElementById("nice-thoughts");

const phrases = ["hrlloe", "2","3", "4","5", "6", "7", "8", "9", "10"];

var random = Math.floor(Math.random() * 10);

btn.addEventListener("click", function() {
  console.log("nice clicking");
    board.innerHTML = phrases[random];
});