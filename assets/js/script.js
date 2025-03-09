document.addEventListener("DOMContentLoaded", function () {
  //↓START PAGE QUIZ↓
  const allButtons = document.querySelectorAll("button");

  /*
  **Adds hover effect to all buttons
  */
  for (let btn of allButtons) {
    btn.addEventListener("mouseenter", function () {
      btn.classList.add("buttonHover");
    });
    btn.addEventListener("mouseleave", function () {
      btn.classList.remove("buttonHover");
    });
  }

  const chooseMode = document.getElementById("chooseMode");
  const startForm = document.getElementById("startForm");
  startForm.addEventListener("submit", showModes);

  const modeButtons = document.getElementsByClassName("mode");
  const startQuizButton = document.getElementById("startQuiz");
  /*
   **Shows the three mode buttons after clicking on "Choose mode"
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

    //Shows the start quiz button when clicking on any of the modes
    function showStartQuizButton(e) {
      const selectedMode = e.target;

      /*
       **Lines 50-54 ensure the following: the buttonSelected class is given solely to the 
       mode button that is selected. If the user decides to change mode by clicking on any
       of the other two buttons, the previously clicked mode will acquire the original colours,
       whilst the newly clicked mode will be assigned the class buttonSelected. As long as the 
       mode buttons are visible, so is the "Start the quiz" button.
       */
      for (let btn of modeButtons) {
        btn.classList.remove("buttonSelected");
      }
      selectedMode.classList.add("buttonSelected");
      startQuizButton.classList.remove("hide-start");
    }
  }
});
