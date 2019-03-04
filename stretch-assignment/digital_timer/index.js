const bodyStyle = document.querySelector('body');
bodyStyle.style.display = "flex";
bodyStyle.style.flexDirection = "column";

const newDiv = document.createElement('div', );
newDiv.className = "buttonDiv";

const bodyContent = document.querySelector('body');

bodyContent.prepend(newDiv);

const startButton = document.createElement('button');
startButton.textContent = "START";

const resetButton = document.createElement('button');
resetButton.textContent = "RESET";

const buttonDiv = document.querySelector('.buttonDiv')
buttonDiv.append(startButton);
buttonDiv.append(resetButton);




const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");

startButton.onclick = function(){
startButton.style.display = "none";
timer();

function timer () {
  init();
  
  function init () {
    let ms = 0;
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";
    
    const timerInterval = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        endTimer(timerInterval); 
      }
      updateTimer(ms);
    }, 10);
  }
  
  function increment (string) {
    let number = Number(string) + 1;
    return number.toString();
  }

  function endTimer (intervalId) {
    clearInterval(intervalId);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit");
    })
  }

  function updateTimer (ms) {
    if (ms === 10000) {
      secondTens.innerHTML = "1";
      secondOnes.innerHTML = "0";
      msHundreds.innerHTML = "0";
      msTens.innerHTML = "0";
    } else if (ms % 1000 === 0) {
      secondOnes.innerHTML = increment(secondOnes.innerHTML);
      msHundreds.innerHTML = "0";
      msTens.innerHTML = "0";
    } else if (ms % 100 === 0) {
      msHundreds.innerHTML = increment(msHundreds.innerHTML);
      msTens.innerHTML = "0";
    } else {
      msTens.innerHTML = increment(msTens.innerHTML);
    }
  }
}
};

resetButton.onclick = function(){
   
}







