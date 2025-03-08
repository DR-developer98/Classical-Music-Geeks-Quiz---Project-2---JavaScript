document.addEventListener("DOMContentLoaded", function () {

  const startForm = document.getElementById("startForm");
  startForm.addEventListener("submit", showModes);

/*
Shows the three mode buttons after clicking on "Choose mode"
*/
  function showModes(e) {
    const form=e.target;
    e.preventDefault();
    const modeButtons = document.getElementsByClassName("mode");
    for (let btn of modeButtons) {
      btn.classList.toggle("hide");
    }
    chooseMode.style = "color: white; background-color: var(--button-color)";
  }
});
