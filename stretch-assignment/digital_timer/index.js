const bodyStyle = document.querySelector('body');
bodyStyle.style.display = "flex";
bodyStyle.style.flexDirection = "column";


const newDiv = document.createElement('div', );
newDiv.className = "buttonDiv";

const bodyContent = document.querySelector('body');

bodyContent.prepend(newDiv);

const startButton = document.createElement('button');
startButton.textContent = "START";
startButton.style.color = "green";
startButton.style.borderRadius = "6px";
startButton.style.padding = "10px";
startButton.style.margin ="5px;"

const resetButton = document.createElement('button');
resetButton.textContent = "RESET";
resetButton.style.color = "red";
resetButton.style.backgroundColor = "black";
resetButton.style.borderRadius = "6px";
resetButton.style.padding = "10px";
resetButton.style.margin ="5px;"

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
  start();
  
  function start () {
      
    let ms = 0;

    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";
    
    const timerCount = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        endTimer(timerCount); 
      }
      update(ms);
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
    });
  }

  function update (ms) {
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

resetButton.onclick = function() {
    if (timer) {
        let ms = 0;
        secondTens.innerHTML = "0";
        secondOnes.innerHTML = "0";
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";
        startButton.style.display ="unset";
      stop();
    }
  };
};










