let divEl = document.querySelector(".container");
let buttonRandom = document.querySelector(".buttonRandom");

function randomWords(words) {
  hEl.textContent = words[Math.floor(Math.random() * words.length)];
}

let callFunc = () => {
  randomWords(arrWords);
};

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

divEl.style.width = "600px";
divEl.style.height = "200px";
divEl.style.textAlign = "center";
divEl.parentElement.style.textAlign = "center";
divEl.style.margin = "0 auto";

buttonRandom.addEventListener("click", callFunc);

//document.write(randomWords(arrWords));
