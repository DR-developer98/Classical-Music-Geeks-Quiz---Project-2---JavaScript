
<img src="assets/images-for-README/classical-music-geeks-quiz-logo.png" style="width: 30%">

<h1>Classical Music Geeks Quiz</h1>
Welcome to the Classical Music Geeks Quiz, your go-to challenge for testing and expanding your classical music knowledge! With up to 10 questions per session, multiple difficulty modes, and instant feedback on your answers, this quiz is perfect for enthusiasts of all levels.

Enjoy a new set of questions every time you play and dive into the rich world of classical music—are you ready to take the challenge?

<img src="assets/images-for-README/am-I-responsive.png">
Link to deployed website: <a href="https://dr-developer98.github.io/Classical-Music-Geeks-Quiz---Project-2---JavaScript/" target="_blank">Classical Music Geeks Quiz</a><br>
Link to repository: <a href="https://github.com/DR-developer98/Classical-Music-Geeks-Quiz-----Project-2---JavaScript">Classical-Music-Geeks-Quiz--Project-2-JavaScript</a>

<h2>Relevant User stories</h2>
<p>The foundation of this Web application is built on the following user stories:</p>
<ol>
<li id="US1">As a user, I want to take a classical music quiz with up to 10 questions, so I can test my knowledge in a short session;</li>
<li id="US2">As a user, I want there to be multiple difficulty modes, so I can challenge myself;</li>
<li id="US3">As a user, I want to immediately see which answer is correct, so I can learn something new;</li>
<li id="US4">As a user, I want to see my score immediately after completing the quiz, so I can see how well I did;</li>
<li id="US5">As a user, I want to take the quiz again with different questions, so I can have a varied experience each time.</li>
</ol>

<h2>Wireframes</h2>
<a href="assets/images-for-README/Classical Music Geeks Quiz - Wireframes.png" target="_blank">Click here to get a better view of the wireframes</a>
<br>
<img src="assets/images-for-README/Classical Music Geeks Quiz - Wireframes.png">

<h2>Features</h2>
<h3 style="color: darkorange">Start Window</h3>
<h4>1) Before user interaction</h4>
In the start page, the user will be presented with a welcome header and with a short rundown of the Quiz rules. 
Below the rule list, there is an input field for the username, which will be displayed in the upper left corner throughout the quiz. For the "Choose mode" button to become clickable, the entered username must contain at least 4 characters.
Inputting a username and subsequently clicking on "Choose mode" will result in the mode buttons and the "Start the quiz" button to appear on the screen. The start the quiz button will at that point be disabled.
<br>
<br>
<a href="assets/images-for-README/start-page-before-inteaction-mobile.jpg" target="_blank">Start page before user interaction MOBILE</a>
<br>
<a href="assets/images-for-README/start-page-no-interaction-tablet.jpg" target="_blank">Start page before user interaction TABLET</a>
<br>
<img src="assets/images-for-README/start-page-before-user-interaction.png" style="width: 60%">
<br>
<h4>2) Username input</h4>
<h5 style="color: gold">Input username of less than 4 characters:</h5>
<a href="assets/images-for-README/input-username-lessthan4ch-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/input-username-lessthan4ch-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/input-username-lessthan4ch.png" style="width: 60%">
<h5 style="color: gold">Input username of at least 4 characters:</h5>
<a href="assets/images-for-README/input-username-4ch-mobile.jpg">MOBILE view</a>
<br>
<a href="assets/images-for-README/input-username-4ch-tablet.jpg">TABLET view</a>
<br>
<img src="assets/images-for-README/input-username-4ch.png" style="width: 60%">
<br>
<h4>3) Choosing a mode</h4>
The "Choose mode" button will now be displayed as "selected" and the mode menu will be expanded, displaying the three different modes. Each mode button label contains the difficulty degree and, in between brackets, the quiz length/duration expressed in number of questions.
This feature adresses both the <a href="#US1">first</a> and the <a href="#US2">second user story</a>, in that it allows the user to select a quiz with up to 10 questions and because it presents them with three difficulty degrees.
Selecting any of the modes will result in the clicked mode button being displayed as "selected" and in the "Start the quiz" button becoming clickable. 
The combination of selecting a mode and clicking on "Start the quiz" will trigger the start of the quiz, presenting the user with an "n" number of questions, where "n" is dictated by the chosen Mode.
<h5 style="color: gold">Mode menu</h5>
<a href="assets/images-for-README/mode-menu-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/mode-menu-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/mode-menu-in-start-page.png" style="width: 60%">
<h5 style="color: gold">Choosing one of the modes</h5>
<a href="assets/images-for-README/choosing-a-mode-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/selecting-a-mode-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/choosing-a-mode.png" style="width: 60%">
<h3 style="color: darkorange">Quiz Window</h3>
<h4>1) Questions 1 to n-1/n</h4>
The quiz window consists of the following parts:
<ul>
<li>In the upper left corner: the entered username;</li>
<li>Immediately under the username, aligned to the center: the question counter (1 to n-1/n);</li>
<li>Under the question counter: question text;</li>
<li>Under the question text: the four possible answers;</li>
<li>In the bottom left corner: the "Next question" button. This button will be displayed but won't be clickable until the user selects an answers.</li>
</ul>

The questions and their respective possible answers are randomly chosen each time from the question pool that corresponds to the selected mode (please refer to <a href="assets/js/script.js">script.js</a>). This ensures that no two quizzes comprise the exact same questions or the exact same questions in the exact same order, allowing for a varied experience each time, according to the <a href="#US5">fifth user story</a>.
Selecting any of the answers will result in the user being provided feedback right away by means of colour coding: if the selected answer is correct, that answer will turn green and the other buttons will be disabled.
If the selected answer is wrong, that answer will turn red and the correct answer will turn green, while the other two buttons will be disabled. The incorporation of this feedback system into the webapp ensures that the <a href="#US3">third user story</a> is adressed.
The "Next question" button is now clickable.
Clicking on the "Next question" button will substitute the current question and its answers by another question with the corresponding possible answers.
<br>
<br>
<h5 style="color: gold">Before user interaction:</h5>
<a href="assets/images-for-README/1st-question-before-interaction-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/1st-question-no-interaction-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/quiz-screen-before-selecting-answer.png" style="width: 60%">
<br>
<h5 style="color: gold">Selecting the right answer:</h5>
<a href="assets/images-for-README/selecting-right-answer-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/1st-question-correct-answer-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/selecting-right-answer-feedback.png" style="width: 60%">
<br>
<br>
<h5 style="color: gold">Selecting the wrong answer:</h5>
<a href="assets/images-for-README/selecting-wrong-answer-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/question-wrong-answer-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/selecting-wrong-answer-feedback.png" style="width: 60%">
<h4>2) Question n/n</h4>
When the question counter hits the maximum "n", after 500ms from selecting an answer, the button "Finish" will appear in the bottom right corner instead of the "Next question" button.
Clicking on "Finish" will forward the user to the End of Quiz window.
<h5 style="color: gold">Last question, before user interaction:</h5>
<a href="assets/images-for-README/last-question-before-interaction-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/last-question-no-interaction-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/last-question-before-user-interaction.png" style="width: 60%">
<br>
<br>
<h5 style="color: gold">Last question, after selecting an answer</h5>
<a href="assets/images-for-README/last-question-after-interaction-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/last-question-after-interaction-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/last-question-after-selecting-answer.png" style="width: 60%">

<h3 style="color: darkorange">End of Quiz Window</h3>
The End of Quiz window comprises the following elements:
<ul>
<li>At the top: the congratulating message "You've reached the end of the Quiz!";</li>
<li>A paragraph returning the score X-correct-answer/n. This feature adresses the <a href="#US4">fourth user story</a>, for it allows the user to see right away how well they did;</li>
<li>A feedback message, which will be different depending on the % correct answers (threshold of 60%);</li>
<li>Two buttons at the bottom: a home button and a "Take another quiz!" button.</li>
</ul>
<h5 style="color: gold">End of quiz page<h5>
<a href="assets/images-for-README/end-of-quiz-mobile.jpg">MOBILE view</a>
<br>
<a href="assets/images-for-README/end-of-quiz-tablet.jpg">TABLET view</a>
<br>
<img src="assets/images-for-README/end-of-quiz-window.png" style="width: 60%">

The <strong>home button</strong> will redirect the user to the Start Window, where no username is entered in the input field and the mode menu is collapsed. This ensures the user can go back to the very beginning, choose another username and another mode.
<h5 style="color: gold">After clicking on the Home button:</h5>
<a href="assets/images-for-README/start-page-before-inteaction-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/start-page-no-interaction-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/start-page-before-user-interaction.png" style="width: 60%">

The <strong>Take another quiz!</strong> button will redirect the user to a modified version of the Start Window, where the rules aren't displayed, the previously entered username is still visible in the input field and all the mode buttons and Start the Quiz button are visible. This feature adresses the <a href="#US5">fifth user story</a> too, in that it presents the user with the mode menu immediately, without the need to first go through the whole process again. It is meant for users, who don't wish to be presented with the list of rules again and who want to take another Quiz maintaining the same username.
At this stage, going back to the start page is possible by refreshing the page.

<h5 style="color: gold">After clicking on "Take another quiz!"</h5>
<a href="assets/images-for-README/take-another-quiz-mobile.jpg" target="_blank">MOBILE view</a>
<br>
<a href="assets/images-for-README/take-another-quiz-tablet.jpg" target="_blank">TABLET view</a>
<br>
<img src="assets/images-for-README/take-another-quiz-window.png" style="width: 60%">

<h3 style="color: darkorange">Future implementations</h3>
<ul>
<li>The possibility to create an account, where all past performances would be registered, which would allow the user to track their progress and play against other players;</li>
<li>Expand the current question pools up to f.e. 100 questions per mode, to allow for even more variety in the quiz;</li>
<li>Change the number of questions per mode to f.e. - respectively - 10/Easy, 20/Medium, 30/Hard. For the purpose of this project and with its evaluation in mind, I kept the maximum number of questions on the low side;</li>
<li>Incorporate a timer into the quiz to add a another layer of difficulty to the quiz;</li>
<li><strong>End of Quiz page:</strong> this page could be implemented by adding social media icons (Instagram, Facebook, X) to allow the user to share their score on their social media platforms, with a CTA message that motivates other users of those platform to try out this quiz.</li>
</ul>

<h2>Testing</h2>
Please refer to <a href="TESTING.md" target="_blank">TESTING.md</a>

<h2>Deployment</h2>
<ul>
<li>Navigate to the GitHub Repository;</li>
<li>Click on the "Settings" tab on the top navigation bar;</li>
<li>Click on "Pages" on the left navigation menu";</li>
<li>Ensure the "Source" is set to "Deploy from a Branch";</li>
<li>Ensure the "Branch" is set to "bugfix/submit-not-ignored"</li>
<li>Click on "Save";</li>
</ul>
The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

<h2>Credit</h2>
<h3>Content</h3>
<ul>
<li><a href="https://copilot.microsoft.com/" target="_blank">Microsoft Copilot</a> was used to create the different question pools and to put them in the right format for the JS code</li>
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

<h3>Media</h3>
All laptop, tablet and mobile phone screenshots were taken on my own devices.