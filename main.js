// 56 str
var animals = [];

animals.push('A'); // добавить в конец элекмент массива
animals.push('B');
animals.push('C');
animals.push('D');
animals.push('E');
animals;
console.log(animals);
animals.unshift('0'); // добавить в начало элемент массива
console.log(animals);

// 57 стр Удаление элемента массива

animals;
var lastAnimal = animals.pop(); // удаляет последний эелемент и возвращает его
lastAnimal;
animals;
// 58 стр Удалить 1ый эелемент массива вернув его значение
console.log('58 str -----');
console.log("console.log(animals);var firstAnimal = animals.shift();console.log(firstAnimal);");
console.log(animals);
var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
animals;

// 59 обьеденение массивов
var arrayA = [1, 2, 3, 4, 5];
var arrayB = [10, 20, 30, 40, 50];
var arrayAandB = arrayA.concat(arrayB);
console.log('59str');
console.log(arrayAandB);

// 60-61 str ARRAY.CONCAT объеденение массивов/  array.indexOf()
var colors = ['red', 'blue', 'yellow'];
colors.indexOf('red'); //0
colors.indexOf('blue'); //1

// array.join(parametr)  // razdelitel v skobkah
var boringAnimals = ['Martyshka', 'Cat', 'Fish', 'Yasherica'];
boringAnimals.join(' * ');
//65 str    Math.random()   <1 / Math.random()*10   <10
// okruglenie Math.floor(3.6)  = 3
var randomWords = ['Bam', 'STILL', 'Game', 'Tor'];
var randomIndex = Math.floor(Math.random() * 4);
randomWords[randomIndex]; // Bam
randomIndex = Math.floor(Math.random() * 4)
0
randomIndex = Math.floor(Math.random() * 4)
3
randomWords[randomIndex]
"Tor"
// 67 str
var phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
];
// Мне выпить еще молочного коктейля? 
//phrases[Math.floor(Math.random() * 5)];

// 69 str zadanie

var nachSets = ['Твоя', 'Моя', 'Ее', 'Его'];
var sredSets = ['Огромная', 'Маленькая', 'Непонятная'];
var endSets = ['Голова', 'Шея', 'Спина', 'Рука', 'Нога'];
var endPrigSets = ['Грязная', 'Вонючая', 'Страшная', 'Ужасная', 'Пугающая'];

var nachSet = nachSets[Math.floor(Math.random() * nachSets.length)];
var sredSet = sredSets[Math.floor(Math.random() * sredSets.length)];
var endSet = endSets[Math.floor(Math.random() * endSets.length)];
var endPrigSet = endPrigSets[Math.floor(Math.random() * endPrigSets.length)];

var randomInsult;

randomInsult = [nachSet, sredSet, endSet, endPrigSet];
//70
//73 узнать количество эелементов содержащий объект
// Object.keys(cars);
// Object.keys(Numbers);
var cars = {
    name: 'BMW',
    Year: 2020,
    Price: 15000
};
var Numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
}

// 75
var dinosaurs = [
    { name: "Тираннозавр рекс", period: "Верхнемеловой" },
    { name: "Стегозавр", period: "Верхнеюрский" },
    { name: "Платеозавр", period: "Триасовый" }
    ];
  /*  Получить сведения о первом динозавре можно уже известным нам
    способом — указав индекс в квадратных скобках:
    dinosaurs[0];
    { name: "Тираннозавр рекс", period: "Верхнемеловой" }
*/









;