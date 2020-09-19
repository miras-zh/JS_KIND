var name = prompt("what is your name?");
console.log("Hi, " + name);
var likeIt = confirm("Do you like Cats ?");
if (likeIt) {
  console.log("you like cat's");
} else {
  console.log("You DON'T like ");
}

var words = [
  "машина",
  "город",
  "миллион",
  "вертолет",
  "квартира",
  "смартфон",
  "планшет",
  "карьера",
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;
while (remainingLetters > 0) {
  alert(answerArray.join(" "));

  var guess = prompt("Угадай букву или нажми отмена для выхода из игры");

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alertcx
  }
}
