<h1>TESTING</h1>

<!--I tested that this website works across some of the major Browsers: Google Chrome, Mozilla Firefox and Microsoft Edge. I also ran manual tests on the following devices and the website worked on all of them as expected.

Mobile phones: Samsung A52, Iphone 7 Plus;
Tablet: Galaxy Tab A (2016)
Laptop: Lenovo
For responsiveness and tests on devices larger than the ones mentioned above I used the BrowserDev Tools.-->

<h2>Validator testing</h2>
<h3>HTML</h3>

<h3>CSS</h3>

<h3>JavaScript</h3>

<h2>Lighthouse report</h2>
<h3>Lighthouse score</h3>

<h2>Manual testing</h2>

<table>
<tr>
<th>Action</th>
<th>Expeced behaviour</th>
<th>Pass/Fail</th>
<tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</table>

<h2>Fixed Bugs</h2>
<ul>
<li>When taking the quiz a 2nd time, the question counter would be incremented by 2 instead of just 1, which meant that you would even see question 11/10, 13/10 in the hard mode, since the counter would never equal the maximum number of question (as it is an even number, in this case). This was fixed by adding a variable to check whether the click event listener on the "Next question" button was already assigned. If it was, then it wouldn't be added again, therefore the "counter++" would cease to be triggered. <strong>Credit/Source:</strong> "Microsoft Copilot"</li>
<!--Add picture of code snippets-->
<li>When taking the quiz a 2nd (3rd, 4th or nth) time by clicking on the "Take another quiz!" button, once having completed the quiz, if you went back on the Start page via the "Home" button, the rules section wouldn't appear. This was caused by the fact that the rulesSection still having the class "hide" active (this was caused by the function in the click event listener for the "Take another quiz button"). This was fixed by adding the following line of code to the homeButton even listener function:</li>
<br>
rulesSection.classList.remove("hide");
<!--Add picture of code snippets-->
<br>
<li>The if statement that was supposed to check for the length of the entered username to be at least 4 characters wasn't working, which caused the "Choose mode" button to stay disabled. This was fixed by assigning the input field an event listener, listening for text input and a function which includes the if statement:</li>
<br>
document
  .getElementsByTagName("input")[0]
  .addEventListener("input", function () {
    if (startForm.username.value.length >= 4) {
      chooseMode.disabled = false;
    } else {
      chooseMode.disabled = true;
    }
  });
  <!--Add picture of code snippets-->
<br>
<li>In the earlier stages of the development process, the "Finish" button at the end of the quiz had the label "Next". The event listener that calls the function endOfQuiz wasn't working, which caused the appearance of the "Next question" button next to the "Finish" button. This was simply fixed by adjusting the name of the button in the endOfQuiz function in the line of code that toggles the "notVisible" class.</li>
<br>
finishBtn.classList.toggle("notVisible");
<!--Add picture of code snippets-->
</ul>