// when we click to the button it listen that and run 
// the second part "handleClick" when we call function 
// inside event listener or some other method, we dont call
//  function as a "handleChick()" because in this case it will 
//  call it directly witout our real action. so in this case it will wait click first then will call function

// document.querySelector("button").addEventListener("click", handleChick);

// function handleChick(){
//     alert("I got clicked");
// }



//detecting sound with click
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    soundPlay(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}



//to add keyboard activation
document.addEventListener("keydown", (event) => {
  // key is special method that gives you a exact key that has been pressed in keyboard;
  soundPlay(event.key);
  buttonAnimation(event.key);
})



function soundPlay(getKey) {
  switch (getKey) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log(getKey);
      break;
  }
}


//animation button

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  //adding css class to the button in html
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);
}