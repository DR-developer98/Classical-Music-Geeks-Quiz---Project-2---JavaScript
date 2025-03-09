document.addEventListener("DOMContentLoaded", function () {
  //↓START PAGE QUIZ↓
  const allButtons = document.querySelectorAll("button");

  /*
  Adds hover effect to all buttons
  */
  for (let btn of allButtons) {
    btn.addEventListener("mouseenter", function () {
      btn.classList.add("buttonHover");
    });
    btn.addEventListener("mouseleave", function () {
      btn.classList.remove("buttonHover");
    });
  }

  const startForm = document.getElementById("startForm");
  startForm.addEventListener("submit", showModes);

  const modeButtons = document.getElementsByClassName("mode");
  const startQuizButton = document.getElementById("startQuiz");
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
    for (let btn of modeButtons) {
      //Adds click event listener on all mode buttons, that triggers appearance Start quiz button
      btn.addEventListener("click", showStartQuizButton);
    }
    /*
  Shows the "Start quiz" button when clicking on any of the modes
  */
    function showStartQuizButton(e) {
      const selectedMode = e.target;
      selectedMode.classList.toggle("buttonSelected");
      startQuizButton.classList.toggle("hide-start");
    }
  }
});
