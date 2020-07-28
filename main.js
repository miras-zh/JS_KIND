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