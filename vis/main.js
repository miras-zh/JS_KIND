var name = prompt("what is your name?");
console.log("Hi, " + name);

var words = [
  "auto",
  "astana",
  "arbalete",
  "vertical",
  "car",
  "bar",
  "parametr",
  "dollar",
];

var word = words[Math.floor(Math.random() * words.length)];
var wa;
var answerArray = []; //pustoi massiv dlya otveta b pokaza otgadannyh bukv
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_"; //prisvaevaem kazhdomu elementu _
}

var remainingLetters = word.length; // peremennaya sk-ko otgadali bukv

while (remainingLetters > 0) {
  alert(answerArray.join(" ")); // delaem razdelenei probelob v massive

  var guess = prompt("Угадай букву или нажми отмена для выхода из игры");

  if (guess === null || guess === 1) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста введите только 1 букву.");
  } else {
    for (var j = 0; j < word.length - 1; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        wa = answerArray[j];
        console.log(guess);
      }
    }
  }
}

alert(
  answerArray.join(" ") + " Отлично!" + name + " Было загадо слово >> " + word
);
/*
// Создаем массив со словами
var words = ["astana", "arbalet", "car", "auto", "camry"];
// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;
// Игровой цикл
while (remainingLetters > 0) {
  // Показываем состояние игры
  alert(answerArray.join(" "));
  // Запрашиваем вариант ответа
  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      debugger;
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // Конец игрового цикла
}
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);

*/
