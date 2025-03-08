document.addEventListener("DOMContentLoaded", function () {
  const allButtons = document.querySelectorAll("button");
  for(let btn of allButtons){
    btn.addEventListener("mouseenter", function() {
        btn.classList.toggle("buttonSelected");
    })
    btn.addEventListener("mouseleave", function() {
        btn.classList.toggle("buttonSelected");
    })
  }

  const startForm = document.getElementById("startForm");
  startForm.addEventListener("submit", showModes);

  /*
Shows the three mode buttons after clicking on "Choose mode"
*/
  function showModes(e) {
    const form = e.target;
    e.preventDefault();
    const modeButtons = document.getElementsByClassName("mode");
    for (let btn of modeButtons) {
      btn.classList.toggle("hide");
    }
    chooseMode.classList.toggle("buttonSelected");
  }
});
