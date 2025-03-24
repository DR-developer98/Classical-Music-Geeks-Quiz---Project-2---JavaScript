
<img src="assets/images-for-README/classical-music-geeks-quiz-logo.png" style="width: 30%">

<h1>Classical Music Geeks Quiz</h1>
Welcome to the Classical Music Geeks Quiz, a quiz designed for the folks with a passion for classical music, who wish to test and maybe even expand their classical music knowledge by taking a quiz!

<img src="assets/images-for-README/am-I-responsive.png">
Link to deployed website: <a href="https://dr-developer98.github.io/Classical-Music-Geeks-Quiz---Project-2---JavaScript/" target="_blank">Classical Music Geeks Quiz</a><br>
Link to repository: <a href="https://github.com/DR-developer98/Classical-Music-Geeks-Quiz-----Project-2---JavaScript">Classical-Music-Geeks-Quiz--Project-2-JavaScript</a>

<h2>Relevant User stories</h2>
The foundation of this Web application is built on the following user stories:
<ol>
<li>As a user, I want to take a classical music quiz with up to 10 questions, so I can test my knowledge in a short session</li>
<li>As a user, I want there to be multiple difficulty modes, so I can challenge myself</li>
<li>As a user, I want to see my score immediately after completing the quiz, so I can see how well I did.</li>
<li>As a user, I want to take the quiz again with different questions, so I can have a varied experience each time.</li>
</ol>

<h2>Wireframes</h2>
<!--ADD WIREFRAMES-->

<h2>Features</h2>
<h3 style="color: darkorange">Start Window</h3>
<h4>Before user interaction</h4>
In the start page, the user will be presented with a welcome header and with a short rundown of the Quiz rules. 
Below the rule list, there is an input field for the username, which will be displayed in the upper left corner throughout the quiz. For the "Choose mode" button to become clickable, the entered username must contain at least 4 characters.
Inputting a username and subsequently clicking on "Choose mode" will result in the mode buttons and the "Start the quiz" button to appear on the screen. The start the quiz button will at that point be disabled.
<br>
<br>
<img src="assets/images-for-README/start-page-before-user-interaction.png" style="width: 60%">
<h4>Choosing a mode</h4>
The "Choose mode" button will now be displayed as "selected". 
Selecting any of the modes will result in the clicked mode button to be displayed as "selected" and in the "Start the quiz" button to be clickable. 
The combination of selecting a mode and clicking on "Start the quiz" will trigger the start of the quiz, presenting the user with a series of "n" questions, where "n" is dictated by the chosen Mode.
<br>
<br>
<img src="assets/images-for-README/mode-menu-in-start-page.png" style="width: 60%">
<h3 style="color: darkorange">Quiz Window</h3>
<h4>Questions 1 to n-1/n</h4>
The quiz window consists of the following parts:
<ul>
<li>In the upper left corner: the entered username;</li>
<li>Immediately under the username, aligned to the center: the question counter (1 to n-1/n);</li>
<li>Under the question counter: question text;</li>
<li>Under the question text: the four possible answers;</li>
<li>In the bottom left corner: the "Next question" button. This button will be displayed but won't be clickable until the user selects an answers.</li>
</ul>

Selecting any of the answers will result in the user being provided feedback right away by means of colour coding: if the selected answer is correct, that answer will turn green and the other buttons will be disabled.
If the selected answer is wrong, that answer will turn red and the correct answer will turn green, while the other two buttons will be disabled. The "Next question" button is now clickable.
Clicking on the "Next question" button will substitute the current question and its answers by another question with the corresponding possible answers.
<br>
<br>
<p style="font-weight: bold; font-size: 15px;">Before user interaction:</p>
<img src="assets/images-for-README/quiz-screen-before-selecting-answer.png" style="width: 60%">
<br>
<p style="color: green; font-weight: bold; font-size: 15px;">Selecting the right answer:</p>
<img src="assets/images-for-README/selecting-right-answer-feedback.png" style="width: 60%">
<br>
<br>
<p style="color: red; font-weight: bold; font-size: 15px;">Selecting the wrong answer:</p>
<img src="assets/images-for-README/selecting-wrong-answer-feedback.png" style="width: 60%">
<h4>Question n/n</h4>
When the question counter hits the maximum "n", after 500ms from selecting an answer, the button "Finish" will appear in the bottom right corner instead of the "Next question" button.
Clicking on "Finish" will forward the user to the End of Quiz window.
<br>
<br>
<p style="font-weight: bold; font-size: 15px;">Last question, before user interaction:</p>
<img src="assets/images-for-README/last-question-before-user-interaction.png" style="width: 60%">
<br>
<br>
<p style="color: orange; font-weight: bold; font-size: 15px;">Last question, after selecting an answer:</p>
<img src="assets/images-for-README/last-question-after-selecting-answer.png" style="width: 60%">

<h3 style="color: darkorange">End of Quiz Window</h3>
The End of Quiz window comprises the following elements:
<ul>
<li>At the top: the congratulating message "You've reached the end of the Quiz!";</li>
<li>A paragraph returning the score X-correct-answer/n;</li>
<li>A feedback message, which will be different depending on the % correct answers (threshold of 60%);</li>
<li>Two buttons at the bottom: a home button and a "Take another quiz!" button.</li>
</ul>
<br>
<p style="font-weight: bold; font-size: 15px;">End of quiz page<p>
<img src="assets/images-for-README/end-of-quiz-window.png" style="width: 60%">

The <strong>home button</strong> will redirect the user to Start Window, where no username is entered in the input field and the mode menu is collapsed. This ensures the user can go back to the very beginning, choose another username and another mode.
<br>
<br>
<img src="assets/images-for-README/start-page-before-user-interaction.png" style="width: 60%">

The <strong>Take another quiz!</strong> button will redirect the user to a modified version of the Start Window, where the rules aren't displayed, the previously entered username is still visible in the input field and all the mode buttons and Start the Quiz button are visible. This feature is meant for users, who don't wish to be presented with the list of rules again and who want to take another Quiz maintaining the same username.
<br>
<br>
<img src="assets/images-for-README/take-another-quiz-window.png" style="width: 60%">

<h3 style="color: darkorange">Future implementations</h3>


<h2>Testing</h2>
Please refer to <a href="TESTING.md" target="_blank">TESTING.md</a>

<h2>Deployment</h2>

<h2>Credit</h2>
<h3>Content</h3>
<ul>
<li><a href="https://copilot.microsoft.com/" target="_blank">Microsoft Copilot</a> was used to create the different questions pools and to put them in the right format for the JS code</li>
<li><a href="https://hackr.io/blog/how-to-build-a-javascript-quiz-app" target="_blank">Hackr.io</a> was consulted when building the quiz. For detailed code referencing, please refer to <a href="assets/js/script.js">script.js</a></li>
<li><a href="https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/" target="_blank">Freecodecamp</a> was consulted for the setTimeOut() function used to delay the appearance of the "Next" button, when answering the last question of the quiz;</li>
<li>W3School was consulted for the "disabled" attribute in the "Start the quiz" button in the start page <a href="https://www.w3schools.com/Tags/att_button_disabled.asp" target="_blank">Attribute button disabled</a></li>
<li>StackOverflow was consulted for the JavaScript code to remove the disabled attribute from the "Start the quiz" button in the start page <a href="https://stackoverflow.com/questions/11719961/javascript-remove-disabled-attribute-from-html-input" target="_blank">JavaScript remove "disabled" attribute from HTML input</a></li>

</ul>
<h3>Used technologies</h3>
<ul>
<li><a href="https://leonardo.ai/" target="_blank">Leonardo.ai</a> was used to create the starting background image, which was further tweaked using <a href="https://copilot.microsoft.com/" target="_blank">Microsoft Copilot</a> to match the style of the page I had in mind;</li>
<li><a href="https://favicon.io/" target="_blank">Favicon.io</a> was used to convert the icon created by <a href="https://copilot.microsoft.com/" target="_blank">Microsoft Copilot</a> into a usable zip-file with the different favicons;</li>
<li>HTML for website structure and different pages;</li>
<li>CSS for website styling</li>
<li>JavaScript for interactivity</li>
</ul>