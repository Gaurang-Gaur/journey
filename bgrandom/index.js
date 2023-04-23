
function randomNo(num) {

    return Math.floor(Math.random() * num);
}
// alert("running");
// console.log(randomNo(34))
function getrandomcolor() {

    const r = randomNo(255);
    const g = randomNo(255);
    const b = randomNo(255);
    console.log(typeof (`rgb(${r},${g},${b})`));// It just return string
    console.log((`rgb(${r},${g},${b})`));// It just return string


    return `rgb(${r},${g},${b})`;
}

getrandomcolor();

function toset() {
    const bgcolor = document.body.getElementsByClassName('first')[0].style.backgroundColor = getrandomcolor();
    const color = document.body.getElementsByClassName('first')[0].style.color = getrandomcolor();
    //    console.log(color);
    //    console.log(bgcolor);

}
// toset();
window.onload = () => {
    toset();
}
setInterval(() => { toset() }, 1500);


const getRandomPastelColor = () => {
    const h = getRandomNumber(360);
    return `hsl(${h}deg, 100%, 90%)`;
};
function bgcolorfor(){
    
const bgcolor2 = document.body.getElementsByClassName('second')[0].style.backgroundColor = getrandomcolor();
// console.log(bgcolor2);
const bgcolor3 = document.body.getElementsByClassName('second')[0].style.color = getrandomcolor();
}

window.onload = () => {
    bgcolorfor();
}
setInterval(() => { bgcolorfor() }, 1500);