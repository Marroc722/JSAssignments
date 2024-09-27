const text = document.getElementById("text");
text.innerHTML = "Mitt namn är Martinique";

const text2 = document.getElementById("text2");
text2.innerHTML = "Tärning";
text2.style.color = "red";

const text3 = document.getElementById("text3");
text3.innerHTML = "Game on";
text3.style.color = "green";

const button = document.getElementById("button1");



let score = 0;
  function increaseBy(inputNumber) {
    return score += inputNumber;
  }

  function updateScore () {
    text3.innerHTML = score;
  }

button.addEventListener("click", function() {
  // Scope
  increaseBy(1);
  updateScore();
});
