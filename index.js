let count = 0

let minusButton = document.querySelector('#minus-btn');
let resetButton = document.querySelector('#reset-btn');
let plusButton = document.querySelector('#plus-btn');
let counterElement = document.getElementById('counter');
let buttons = document.querySelectorAll('.theme-buttons');

function increase(){
    count ++;
    counterElement.innerHTML = count;
}

function decrease() {
    count --;
    counterElement.innerHTML = count;
}

function reset() {
    count = 0;
    counterElement.innerHTML = count;
}

function changeTheme(event) {
    let classString = event.target.innerHTML;

    document.querySelector('body').className = classString;
    document.querySelector('main').className = classString;
    let allButtons = document.querySelectorAll('button')

    for (let i = 0; i < allButtons.length;i++) {
        let currentButton = allButtons[i];
        currentButton.classList = classString;
    }
}

for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];

    currentButton.addEventListener('click', changeTheme)
}


minusButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);
plusButton.addEventListener('click', increase);