function changeText() {
    text = document.getElementById('change-text');
    hiddenObjects = document.getElementsByClassName('no-display');
    text.innerHTML = "Goodbyeeee";
    text.style.fontSize = "100px";
    hiddenObjects.style.display = "block";
}

function checkButton() {
    let button = getElementByTagName('button');
    button.style.backgroundColor = 'blue';
    alert('Hello');

    // for (let i = 0; i < buttons.length;){
    //     if (buttons[3].style.backgroundColor = 'blue') {

    // }

}

if (buttons[3].style.backgroundColor = 'blue') {
    alert('Deer')
}