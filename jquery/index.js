// alert("workding");
$(document).ready(function(){
    $("h1.titl").css("color","blue");
    $("h1#id1").css("color","yellow");


});

// const a=document.body;

// a.querySelectorAll("button")[1].addEventListener("click",function(e){
//     console.log(e);
//     console.log(typeof(e));
    
// })
// a.querySelectorAll("button")[2].addEventListener("keypress",function(e){

// console.log(e.key);

// })
let a=document.body;
// let random=$
let button=a.querySelectorAll("button");
// let inp=$("input").keypress(function(e){
//     $("h1#id1").text(e.key);
//     console.log(e.key);
// })
$("h1#id1").on("mouseover",  (e)=>{

    // console.log(e);
    $("h1#id1").text("running");
    
    })
// alert("rnn");

// button.addEventlistner("click",function(){

// })
// alert("running");
