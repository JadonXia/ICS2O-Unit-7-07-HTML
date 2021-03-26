// These are the variables I need for my program
let numbOne = 0
let numbTwo = 0
let counter = 0
let answer = 0

// Here I will link my JavaScript with the HTML button.
document.getElementById('button1').addEventListener('click', multiply)

// Now, I write out what function 'multiply' does.
function multiply () {
  numbOne = document.getElementById('text1').value
  numbTwo = document.getElementById('text2').value
  numbOne = parseInt(numbOne)
  numbTwo = parseInt(numbTwo)
  if (numbOne < 0) {
    for (counter = 0; counter > numbOne; counter--) {
      answer = answer - numbTwo
    }
    document.getElementById('results').innerHTML = answer
  } else if (numbOne > 0 || numbTwo > 0) {
    for (counter = 0; counter < numbOne; counter++) {
      answer = answer + numbTwo
    }
    document.getElementById('results').innerHTML = answer
  }
}
