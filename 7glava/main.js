let aText = document.querySelector('.container');
let ht = (ii) => {
    for (let i = 0; i <ii; i++ ){
    let el = document.createElement('h1');
    let inputEl = document.createElement('input');
    let buttonEl = document.createElement('button');

        el.className = 'el';
        el.textContent = 'JavaScript';
    aText.appendChild(el)
    aText.appendChild(inputEl);
    aText.appendChild(buttonEl);
        el.style.border = '1px solid red';
        el.style.width ='200px';
        el.style.textAlign = 'center'
        buttonEl.style.width = '70px';
        buttonEl.style.height = '18px';
        buttonEl.style.marginLeft='5px';
        buttonEl.textContent = 'send';
    let hText = document.querySelector('.hhhh');
    hText.textContent ='YAY' ;

    let valueT = () => {
        hText.textContent = inputEl.value;
    }
    buttonEl.addEventListener('click',valueT)
}
}
ht(1);
ht(1);