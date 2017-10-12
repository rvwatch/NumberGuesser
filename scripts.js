
var slider = document.getElementById("myRange");
var sliderValue;


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    sliderValue = parseInt(this.value);
    // console.log(slideValue);
    return false;
}

var setMaxBtn = document.getElementById("setMax");
var slidecontainer = document.getElementById("slidecontainer");
var guessResponses = document.getElementById('guessResponses');
var numberform = document.querySelector('#numberform');
var randoNumber;

var randoNumber = numbGen(0, sliderValue);

    function numbGen(min, max) {
      var min = Math.ceil(0);
      var max = Math.floor(max);
      Math.floor(Math.random() * (max - min + 1)) + min; 
      
    }

setMaxBtn.addEventListener('click', function () {
    numberform.style.display = 'block';
    guessResponses.style.display = 'block';
    slidecontainer.style.display = 'none';

    randoNumber(console.log("hey"));

});


    

var output = document.getElementById("maxNum");
var slideValue = output.innerHTML;// Display the default slider value





// var randoNumber = getRandomIntInclusive(0, slideValue); // min to max range
var input = document.getElementById('guess'); //targets the guess input box
var last = document.getElementById('last-guess'); //this targets the last-guess ID
var guessButtonClick = document.querySelector('.makeGuess'); // sets the var of the guess button
var response = document.getElementById('result-response');
var guessedH2 = document.querySelector('.guessedH2');

var resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', function () {
  window.location.reload();
});


var myInput = document.getElementById('guess');
var clearBtn = document.querySelector('.clearBtn');

myInput.oninput = function() {
    if (myInput && myInput.value) {
      guessButtonClick.classList.remove('disabled');
      clearBtn.classList.remove('disabled');
      resetButton.classList.remove('disabled');
  }
}


guessButtonClick.addEventListener('click', function () {
      
  var filter = document.forms["numberform"]["guess"].value;
    if (isNaN(filter)) {
      last.innerText = "Numbers Only!"
      return false;
    }
  guessedH2.style.visibility = 'visible';
  last.innerText = input.value; //This changes your last guess value
  input.innerHTML = " ";

// This checks your guess against the rando number
  var goodNumber = parseInt(input.value);      
    if(goodNumber < randoNumber){
      response.innerText = "Too Low... Guess Again!"; 
    } else if (goodNumber > randoNumber){
      response.innerText = "Too High... Guess Again!"; 
    } else if (goodNumber == randoNumber){
      response.innerText = "Boom, you guessed it!!"; 
    } 
});







