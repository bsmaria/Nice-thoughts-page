const btn = document.getElementById("random");
const board = document.getElementById("nice-thoughts");
let btext = document.getElementById("text");

const phrases = ["hrlloe", "2","3", "4","5", "6", "7", "8", "9", "10"];



btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * 10);
    board.innerHTML = phrases[random];
});