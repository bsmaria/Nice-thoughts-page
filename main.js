const btn = document.getElementById("random-quote");
const board = document.getElementById("nice-thoughts");

const phrases = ["1", "2","3", "4","5", "6", "7", "8", "9", "10"];

const random = Math.floor(Math.random() * 10);

btn.addEventListener("click", function() {
    board.innerHTML = phrases[random];
});