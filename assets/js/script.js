document.addEventListener("DOMContentLoaded", function () {
  //↓START PAGE QUIZ↓
  const allButtons = document.querySelectorAll("button");
  
  /*
  Adds hover effect to all buttons
  */
  for (let btn of allButtons) {
    btn.addEventListener("mouseenter", function () {
      btn.classList.toggle("buttonSelected");
    });
    btn.addEventListener("mouseleave", function () {
      btn.classList.toggle("buttonSelected");
    });
  }

  const startForm = document.getElementById("startForm");
  startForm.addEventListener("submit", showModes);

  const modeButtons = document.getElementsByClassName("mode");
  /*
   Shows the three mode buttons after clicking on "Choose mode"
   */
  function showModes(e) {
    const form = e.target;
    e.preventDefault();
    for (let btn of modeButtons) {
      btn.classList.toggle("hide");
    }
    chooseMode.classList.toggle("buttonSelected");
  }

  for (let btn of modeButtons) {
    btn.addEventListener("click", showStartQuizButton);
  }

  /*
  Shows the "Start quiz" button when clicking on any of the modes
  */

  function showStartQuizButton(e) {
    let clickedButton = e.target;
    const startQuizButton = document.getElementById("startQuiz");
    startQuizButton.classList.toggle("hide-start");
    clickedButton.classList.toggle("selectedButton");
  }
});
