let a=0;
function randome(){
    a=Math.random()*6;
    a=Math.floor(a);
    a=a+1;
    // console.log(a);
    
    return a;
    
}

let b=0; 
function random(){
    b=Math.random()*6;
    b=Math.floor(b);
    b=b+1;
    // console.log(b);

    return b;


}
a=randome();
b=random();
// console.log(a);
document.querySelector("img").setAttribute("src",`style/images/dice${a}.png`);
document.querySelectorAll("img")[1].setAttribute("src",`style/images/dice${b}.png`);
let c;
if(a>b){
    c="a is winner";
}
else if(a===b){
    c="draw match";
}
else
c="b is winner";

document.querySelectorAll("div")[4].innerHTML=c;

// alert("working");
// let a=document.getElementsByClassName("dice1");
// setAttribute