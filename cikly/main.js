var sheepCounted = 0;
while (sheepCounted < 15) {
    console.log('овец подсчитано > ' + sheepCounted);
    sheepCounted++;
}
console.log('xppppppppp')

for (let i = 0; i < 15; i++) {
    console.log('овец подсчитано >>>> ' + sheepCounted);
}
console.log('---------------');

var nameVar = 'Miras';

for (let i = 0; i < nameVar.length; i++) {
    console.log('words > ' + nameVar[i]);
}

for (let i = 1; i < 10000; i *= 2) {
    console.log('cifra > ' + i);
}
var arrayAnimals = ['рыба', 'собака', 'кошка', 'слон', 'тигр'];
for (let i = 0; i < arrayAnimals.length; i++) {
    arrayAnimals[i] = arrayAnimals[i] + ' прекрасное животное';
}

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        document.write(arr[i] + '<br>');
    }
}