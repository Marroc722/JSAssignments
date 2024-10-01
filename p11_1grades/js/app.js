// E7 Random Passwords

const possibleCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "?", "%", "&", "+"];

let password = "";
let lenghtOfPassword = 22;

function getRandomInt() {
  return Math.floor(Math.random() * possibleCharacters.length);
}


for (let i = 0; i < lenghtOfPassword; i++) {
  let randomIndex = getRandomInt();
    password += possibleCharacters[getRandomInt];
}


possibleCharacters.length;
possibleCharacters.indexOf("a");
possibleCharacters[1];

//

