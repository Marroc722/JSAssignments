const birthyear = 1995;
const currentyear = 2024;
const favoritenumber = 29;

const currentage = currentyear - birthyear;
console.log(currentage);

let isachild = (currentage >= 0) && (currentage <= 10);

let isateenager = (currentage >= 11) && (currentage <= 18);

let isanadult = currentage >= 19;

if (isachild) {
  console.log ("you are a child.");
}
if (isateenager) {
  console.log ("you are a teenager.");
}
if (isanadult) {
console.log ("you are an adult");
}

console.log(favoritenumber);


if (favoritenumber > currentage) {
  console.log ("favorite number is greater")
}

else if (favoritenumber === currentage) {
  console.log ("favorite number " + favoritenumber + " is the same")
}

else {
  console.log ("age is greater ")
}



if (favoritenumber % 2 === 0) {
  console.log ("favorite number is even")
}

else {
  console.log ("favorite number is odd")
}


function moveForward () {
  console.log ("move forward");
}
function turnRight () {
  console.log ("turn right");
}

// ny uppgift

function moveThreeSteps () {
  moveForward ();
  moveForward ();
  moveForward ();
}

function turnAround () {
  turnRight();
  turnRight();
}

function turnLeft() {
  turnRight();
  turnRight();
  turnRight();
}

moveThreeSteps();
turnAround();
moveThreeSteps();
turnLeft();
moveThreeSteps();
turnLeft();
moveForward();
turnAround();
moveForward();

// New assignment


console.log (doublenumber (4));

function doublenumber (numberToDouble) {
  return numberToDouble * 2;
}

function multiplyByItself (inputNumber) {
  return inputNumber * inputNumber;
}
console.log (multiplyByItself (4));

//
function multiplySplit (number, number2) {
  return (number + number2) / 2;
}
console.log (multiplySplit (2, 6));

function fullName (firstname, lastname) {
  return "Welcome " + firstname +" "+ lastname;
}
console.log (fullName("Martinique", "Rockström"));

//


function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
console.log (getRandomInt ());

//

function transferNumberToLetter (number) {
  if (number == 0 ) {
    return "A";
  }
  if (number == 1) {
    return "B";
    }
  if (number == 2) {
    return "C";
  }
}
console.log (transferNumberToLetter (2));

//

function compareNumbers (input1, input2) {
  if (input1 > input2) {
    return "first number is greater";
  }
  if (input1 == input2) {
    return "both numbers are equal";
  }
  if (input1 < input2) {
    return "second number is greater";
  }
}
console.log (compareNumbers(2,3));
//
