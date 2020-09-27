let divEl = document.querySelector(".container");
let buttonRandom = document.querySelector(".buttonRandom");

function randomWords(words) {
  hEl.textContent = words[Math.floor(Math.random() * words.length)];
}

let callFunc = () => {
  randomWords(arrWords);
};
//Data
let arrWords = [
  "React",
  "JS",
  "PHP",
  "Python",
  "Java",
  "Angular",
  "Laravel",
  "Node",
];

let hEl = document.createElement("h1");
hEl.className = "hhh";
divEl.appendChild(hEl);
//styleContainer
divEl.style.width = "600px";
divEl.style.height = "200px";
divEl.style.textAlign = "center";
divEl.parentElement.style.textAlign = "center";
divEl.style.margin = "0 auto";

buttonRandom.addEventListener("click", callFunc);

//document.write(randomWords(arrWords));

let divElTwo = document.querySelector(".newRandomContainer");
let buttonRandomTwo = document.querySelector(".buttonRandomCompl");
let hElTwo = document.createElement("h1");
divElTwo.appendChild(hElTwo);
//style
buttonRandomTwo.style.marginTop = "20px";
hElTwo.className = "hhh";
divElTwo.style.width = "600px";
divElTwo.style.height = "200px";
divElTwo.style.textAlign = "center";
divElTwo.style.margin = "0 auto";
divElTwo.style.border = "1px solid black";

function MyCompliment() {
  let arrayParts = ["JS", "PHP", "Swift", "C++", "Python"];
  let arrayOpisani = [
    "Быстрая Ракета",
    "Ползающая улитка",
    " Скоростная магистраль",
    " Севший Элетромобиль",
    " Атомная реактор",
  ];
  let randomWord =
    "Язык программирования " +
    arrayParts[Math.floor(Math.random() * arrayParts.length)] +
    " словно " +
    arrayOpisani[Math.floor(Math.random() * arrayOpisani.length)];
  return (hElTwo.textContent = randomWord);
}

buttonRandomTwo.addEventListener("click", MyCompliment);
