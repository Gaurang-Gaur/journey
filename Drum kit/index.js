
// for(let i=0;i<7;i++){

//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         alert("i got clicked");
//     } 
//     );
// }
// better way of doing this is:

let num = document.querySelectorAll(".drum").length;
// adding a event listner to all the buttons.

for (let i = 0; i < num; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
      
        this.style.color = "red";
        let buttonInnerHtml = this.innerText;
      makesound(buttonInnerHtml);
      addAnimation(buttonInnerHtml);
    });
}
// add event listner to keyboard pressed keys...

document.addEventListener("keypress",function(event){
      makesound(event.key);
      addAnimation(event.key);
});   

function makesound(key){
      switch (key) {
            case "w":
                  let tom1=new Audio("sounds/tom-1.mp3");
                   tom1.play();
                   break;
            case "a":
                  let tom2=new Audio("sounds/tom-2.mp3");
                   tom2.play();
                   break;
            case "s":
                  let tom3=new Audio("sounds/tom-3.mp3");
                   tom3.play();
                   break;
            case "d":
                  let tom4=new Audio("sounds/tom-4.mp3");
                   tom4.play();
                   break;
            case "j":
                  let snare =new Audio("sounds/snare.mp3");
                   snare.play();
                   break;
            case "k":
                  let crash=new Audio("sounds/crash.mp3");
                   crash.play();
                   break;
            case "l":
                  let kick=new Audio("sounds/kick-bass.mp3");
                   kick.play();
                   break;


        };
};
function addAnimation(currentkey){
      let activeButton=document.querySelector("."+currentkey);
      activeButton.classList.add("pressed");
      // activeButton.childList.add("set");
      setTimeout(function(){
            activeButton.classList.remove("pressed");

      },100);
      // activeButton.childList.add("game-over");
}