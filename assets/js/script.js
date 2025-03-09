document.addEventListener("DOMContentLoaded", function () {
  //↓START PAGE QUIZ↓
  const allButtons = document.querySelectorAll("button");

  //Adds hover effect to all buttons
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

  //Shows the three mode buttons after clicking on "Choose mode"
  function showModes(e) {
    const form = e.target;
    e.preventDefault();
    for (let btn of modeButtons) {
      btn.classList.toggle("hide");
    }
    chooseMode.classList.toggle("buttonSelected");
    startQuizButton.classList.toggle("hide-start");

    /*
    **When clicking on Choose mode a second time after selecting one of the modes, 
    if the user clicks on Choose mode again, the previously selected mode button will 
    no longer have the "buttonSelected" class and the "Start the quiz" button will be 
    disabled
    */
    for (let btn of modeButtons) {
      if (btn.classList.contains("hide")){
        btn.classList.remove("buttonSelected");
        startQuizButton.disabled = true;
      }
    }

    /*
    **Adds click event listener to all mode buttons, which removes the
    "disabled" attribute from "Start the quiz" button
    */
    for (let btn of modeButtons) {
      btn.addEventListener("click", showStartQuizButton);
    }

    //Shows the start quiz button when clicking on any of the modes
    function showStartQuizButton(e) {
      const selectedMode = e.target;

      /*
       **Assigns buttonSelected class only to the selected mode button. When clicking on any other
       mode button, the buttonSelected class will pass - as it were - from the previous mode to 
       the newly selected mode. The "Start the quiz" button will be enabled only as soon as one of 
       the modes is selected.
       */
      for (let btn of modeButtons) {
        btn.classList.remove("buttonSelected");
      }
      selectedMode.classList.add("buttonSelected");
      startQuizButton.disabled = false;
    }
  }
});
