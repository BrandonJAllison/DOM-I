
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


(function() {
    "use strict";
    const secondsLabel = document.getElementById('secondTens'),
    startButton = document.getElementById('startButton'), 
    resetButton = document.getElementById('resetButton'), timer = 0;

    startButton.onclick = function() {
      if (timer) {
        timer = setInterval(setTime, 1000);
      }
    };
  
    resetButton.onclick = function() {
      if (timer) {
        totalSeconds = 10;
        stop();
      }
    };
  
    function setTime() {
      totalSeconds++;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
    }
  
  
  })();







