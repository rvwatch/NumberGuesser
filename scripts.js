window.onload = function(){
  document.getElementById('makeGuess').onclick = function() {

    var input = document.getElementById('guess');
    var last = document.getElementById('last-guess'); //this targets the last-guess ID

    last.innerText = input.value; //This changes your last guess value
  }
}

