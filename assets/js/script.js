document.addEventListener("DOMContentLoaded", function () {
  //------------------↓START PAGE QUIZ↓------------------
  const startWindow = document.getElementById("startWindow");
  const quizWindow = document.getElementById("quizWindow");
  const endOfQuizWindow = document.getElementById("endQuizWindow");
  const chooseMode = document.getElementById("chooseMode");
  const startForm = document.getElementById("startForm");
  startForm.addEventListener("submit", showModes);

  const modeButtons = document.getElementsByClassName("mode");
  const easyMode = document.getElementById("easyMode");
  const mediumMode = document.getElementById("mediumMode");
  const hardMode = document.getElementById("hardMode");
  const startQuizButton = document.getElementById("startQuiz");
  let username;

  /**
   * Shows the three mode buttons after clicking on "Choose mode"
   */
  function showModes(e) {
    const form = e.target;
    e.preventDefault();
    username = form.username.value;

    for (let btn of modeButtons) {
      btn.classList.toggle("hide");
    }
    chooseMode.classList.toggle("buttonSelected");
    startQuizButton.classList.toggle("hide-start");

    /*
    When clicking on Choose mode a second time after selecting one of the modes, 
    if the user clicks on Choose mode again, the previously selected mode button will 
    no longer have the "buttonSelected" class and the "Start the quiz" button will be 
    disabled
    */
    for (let btn of modeButtons) {
      if (btn.classList.contains("hide")) {
        btn.classList.remove("buttonSelected");
        startQuizButton.disabled = true;
      }
    }

    /*
    Adds click event listener to all mode buttons, which removes the
    "disabled" attribute from "Start the quiz" button
    */
    for (let btn of modeButtons) {
      btn.addEventListener("click", showStartQuizButton);
    }

    /**
     * Shows the start quiz button when clicking on any of the modes
     */
    function showStartQuizButton(e) {
      const selectedMode = e.target;

      /*
      Assigns buttonSelected class only to the selected mode button. When clicking on any other
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

  //---------------↓QUIZ SECTION↓-----------------
  //↓QUESTION POOLS FOR THE DIFFERENT MODES↓
  const easyQuestionsList = [
    {
      question: "Who composed the 'Für Elise'?",
      answers: [
        { text: "Johann Sebastian Bach", correct: false },
        { text: "Wolfgang Amadeus Mozart", correct: false },
        { text: "Ludwig van Beethoven", correct: true },
        { text: "Franz Schubert", correct: false },
      ],
    },
    {
      question: "Which composer wrote 'The Four Seasons'?",
      answers: [
        { text: "Johannes Brahms", correct: false },
        { text: "Frederic Chopin", correct: false },
        { text: "Antonio Vivaldi", correct: true },
        { text: "Giuseppe Verdi", correct: false },
      ],
    },
    {
      question: "The opera 'Carmen' was composed by?",
      answers: [
        { text: "Gioachino Rossini", correct: false },
        { text: "Richard Wagner", correct: false },
        { text: "Georges Bizet", correct: true },
        { text: "Franz Liszt", correct: false },
      ],
    },
    {
      question: "Which composer was known as the 'Waltz King'?",
      answers: [
        { text: "Franz Schubert", correct: false },
        { text: "Richard Strauss", correct: false },
        { text: "Johann Strauss II", correct: true },
        { text: "Franz Joseph Haydn", correct: false },
      ],
    },
    {
      question: "Who composed the 'Moonlight Sonata'?",
      answers: [
        { text: "Wolfgang Amadeus Mozart", correct: false },
        { text: "Franz Schubert", correct: false },
        { text: "Ludwig van Beethoven", correct: true },
        { text: "Johann Sebastian Bach", correct: false },
      ],
    },
    {
      question: "Who composed the ballet 'The Nutcracker'?",
      answers: [
        { text: "Igor Stravinsky", correct: false },
        { text: "Pyotr Ilyich Tchaikovsky", correct: true },
        { text: "Maurice Ravel", correct: false },
        { text: "Claude Debussy", correct: false },
      ],
    },
    {
      question: "Which composer wrote 'Eine kleine Nachtmusik'?",
      answers: [
        { text: "Ludwig van Beethoven", correct: false },
        { text: "Johann Sebastian Bach", correct: false },
        { text: "Wolfgang Amadeus Mozart", correct: true },
        { text: "Joseph Haydn", correct: false },
      ],
    },
    {
      question: "The 'Hallelujah Chorus' is part of which oratorio?",
      answers: [
        { text: "The Creation", correct: false },
        { text: "Messiah", correct: true },
        { text: "Elijah", correct: false },
        { text: "Requiem", correct: false },
      ],
    },
    {
      question: "Who composed the 'William Tell Overture'?",
      answers: [
        { text: "Antonio Vivaldi", correct: false },
        { text: "George Frideric Handel", correct: false },
        { text: "Gioachino Rossini", correct: true },
        { text: "Ludwig van Beethoven", correct: false },
      ],
    },
    {
      question: "Who composed 'The Blue Danube'?",
      answers: [
        { text: "Johann Sebastian Bach", correct: false },
        { text: "Wolfgang Amadeus Mozart", correct: false },
        { text: "Johann Strauss II", correct: true },
        { text: "Franz Schubert", correct: false },
      ],
    },
    {
      question: "Who wrote the 'Brandenburg Concertos'?",
      answers: [
        { text: "Ludwig van Beethoven", correct: false },
        { text: "Joseph Haydn", correct: false },
        { text: "Johann Sebastian Bach", correct: true },
        { text: "Antonio Vivaldi", correct: false },
      ],
    },
    {
      question: "Who composed 'Boléro'?",
      answers: [
        { text: "Claude Debussy", correct: false },
        { text: "Igor Stravinsky", correct: false },
        { text: "Maurice Ravel", correct: true },
        { text: "Sergei Prokofiev", correct: false },
      ],
    },
    {
      question: "Who composed the 'Symphony No. 9 in D minor' (Ode to Joy)?",
      answers: [
        { text: "Johannes Brahms", correct: false },
        { text: "Franz Schubert", correct: false },
        { text: "Ludwig van Beethoven", correct: true },
        { text: "Felix Mendelssohn", correct: false },
      ],
    },
    {
      question: "Who composed the 'Carnival of the Animals'?",
      answers: [
        { text: "Claude Debussy", correct: false },
        { text: "Gabriel Fauré", correct: false },
        { text: "Camille Saint-Saëns", correct: true },
        { text: "Hector Berlioz", correct: false },
      ],
    },
    {
      question: "Which composer wrote 'Piano Sonata No. 16 in C Major'?",
      answers: [
        { text: "Ludwig van Beethoven", correct: false },
        { text: "Johann Sebastian Bach", correct: false },
        { text: "Franz Schubert", correct: false },
        { text: "Wolfgang Amadeus Mozart", correct: true },
      ],
    },
  ];
  const mediumQuestionsList = [
    {
      question: "Which composer is known for his 'Canon in D'?",
      answers: [
        { text: "Johann Pachelbel", correct: true },
        { text: "Johann Sebastian Bach", correct: false },
        { text: "Antonio Vivaldi", correct: false },
        { text: "George Frideric Handel", correct: false },
      ],
    },
    {
      question: "In which year was Ludwig van Beethoven born?",
      answers: [
        { text: "1750", correct: false },
        { text: "1770", correct: true },
        { text: "1790", correct: false },
        { text: "1810", correct: false },
      ],
    },
    {
      question: "Which instrument did Frederic Chopin primarily compose for?",
      answers: [
        { text: "Violin", correct: false },
        { text: "Piano", correct: true },
        { text: "Cello", correct: false },
        { text: "Flute", correct: false },
      ],
    },
    {
      question: "Which composer is associated with the term 'Impressionism'?",
      answers: [
        { text: "Johannes Brahms", correct: false },
        { text: "Claude Debussy", correct: true },
        { text: "Franz Liszt", correct: false },
        { text: "Ludwig van Beethoven", correct: false },
      ],
    },
    {
      question:
        "The 'Rite of Spring' caused a riot at its premiere in 1913. Who composed it?",
      answers: [
        { text: "Igor Stravinsky", correct: true },
        { text: "Sergei Rachmaninoff", correct: false },
        { text: "Maurice Ravel", correct: false },
        { text: "Gustav Holst", correct: false },
      ],
    },
    {
      question:
        "Which composer famously began losing his hearing in his late 20s?",
      answers: [
        { text: "Ludwig van Beethoven", correct: true },
        { text: "Wolfgang Amadeus Mozart", correct: false },
        { text: "Franz Schubert", correct: false },
        { text: "Joseph Haydn", correct: false },
      ],
    },
    {
      question:
        "The 'Carnival of the Animals' is a work by which French composer?",
      answers: [
        { text: "Camille Saint-Saëns", correct: true },
        { text: "Claude Debussy", correct: false },
        { text: "Maurice Ravel", correct: false },
        { text: "Gabriel Fauré", correct: false },
      ],
    },
    {
      question: "Who composed the opera 'Madama Butterfly'?",
      answers: [
        { text: "Giacomo Puccini", correct: true },
        { text: "Giuseppe Verdi", correct: false },
        { text: "Richard Wagner", correct: false },
        { text: "Ludwig van Beethoven", correct: false },
      ],
    },
    {
      question: "Which symphony is often referred to as 'Beethoven's Tenth'?",
      answers: [
        { text: "Brahms' Symphony No. 1", correct: true },
        { text: "Schubert's Symphony No. 8", correct: false },
        { text: "Tchaikovsky's Symphony No. 6", correct: false },
        { text: "Dvorak's Symphony No. 9", correct: false },
      ],
    },
    {
      question: "Which composer wrote the piece 'Gymnopédies'?",
      answers: [
        { text: "Erik Satie", correct: true },
        { text: "Claude Debussy", correct: false },
        { text: "Maurice Ravel", correct: false },
        { text: "Gabriel Fauré", correct: false },
      ],
    },
    {
      question:
        "Which composer was a child prodigy and wrote his first symphony at age 8?",
      answers: [
        { text: "Franz Schubert", correct: false },
        { text: "Ludwig van Beethoven", correct: false },
        { text: "Wolfgang Amadeus Mozart", correct: true },
        { text: "Felix Mendelssohn", correct: false },
      ],
    },
    {
      question: "The 'Brandenburg Concertos' were dedicated to which patron?",
      answers: [
        { text: "Duke of Weimar", correct: false },
        { text: "Margrave of Brandenburg", correct: true },
        { text: "Elector of Saxony", correct: false },
        { text: "Prince of Anhalt-Köthen", correct: false },
      ],
    },
    {
      question: "Which composer wrote 'Carmina Burana'?",
      answers: [
        { text: "Carl Orff", correct: true },
        { text: "Richard Strauss", correct: false },
        { text: "Gustav Mahler", correct: false },
        { text: "Anton Bruckner", correct: false },
      ],
    },
    {
      question: "Which piece features the famous 'Ode to Joy' theme?",
      answers: [
        { text: "Beethoven's Symphony No. 9", correct: true },
        { text: "Mozart's Symphony No. 40", correct: false },
        { text: "Haydn's Symphony No. 94", correct: false },
        { text: "Brahms' Symphony No. 1", correct: false },
      ],
    },
    {
      question: "Which composer is known for his 'Hungarian Rhapsodies'?",
      answers: [
        { text: "Franz Liszt", correct: true },
        { text: "Bela Bartok", correct: false },
        { text: "Antonin Dvorak", correct: false },
        { text: "Johannes Brahms", correct: false },
      ],
    },
    {
      question:
        "The 'Planets' suite by Gustav Holst contains how many movements?",
      answers: [
        { text: "5", correct: false },
        { text: "7", correct: true },
        { text: "9", correct: false },
        { text: "11", correct: false },
      ],
    },
    {
      question: "Which composer is known for his twelve-tone technique?",
      answers: [
        { text: "Igor Stravinsky", correct: false },
        { text: "Arnold Schoenberg", correct: true },
        { text: "Sergei Prokofiev", correct: false },
        { text: "Richard Strauss", correct: false },
      ],
    },
    {
      question:
        "The 'Enigma Variations' are a set of variations by which composer?",
      answers: [
        { text: "Ralph Vaughan Williams", correct: false },
        { text: "Edward Elgar", correct: true },
        { text: "Benjamin Britten", correct: false },
        { text: "Frederick Delius", correct: false },
      ],
    },
    {
      question: "Which opera by Giuseppe Verdi is set in ancient Egypt?",
      answers: [
        { text: "Rigoletto", correct: false },
        { text: "La Traviata", correct: false },
        { text: "Aida", correct: true },
        { text: "Otello", correct: false },
      ],
    },
    {
      question: "Which composer wrote the ballet 'The Nutcracker'?",
      answers: [
        { text: "Pyotr Ilyich Tchaikovsky", correct: true },
        { text: "Igor Stravinsky", correct: false },
        { text: "Sergei Prokofiev", correct: false },
        { text: "Dmitri Shostakovich", correct: false },
      ],
    },
    {
      question:
        "The 'Symphonie fantastique' by Hector Berlioz is based on what?",
      answers: [
        { text: "A love story", correct: true },
        { text: "A mythical legend", correct: false },
        { text: "A historical event", correct: false },
        { text: "A philosophical treatise", correct: false },
      ],
    },
  ];
  const hardQuestionsList = [
    {
      question:
        "Which composer is known for the invention of the twelve-tone technique?",
      answers: [
        { text: "Arnold Schoenberg", correct: true },
        { text: "Igor Stravinsky", correct: false },
        { text: "Dmitri Shostakovich", correct: false },
        { text: "Sergei Prokofiev", correct: false },
      ],
    },
    {
      question:
        "The opera 'Boris Godunov' was composed by which Russian composer?",
      answers: [
        { text: "Pyotr Ilyich Tchaikovsky", correct: false },
        { text: "Modest Mussorgsky", correct: true },
        { text: "Nikolai Rimsky-Korsakov", correct: false },
        { text: "Sergei Rachmaninoff", correct: false },
      ],
    },
    {
      question: "Which piece by John Cage is famously silent?",
      answers: [
        { text: "4'33\"", correct: true },
        { text: "Sonatas and Interludes", correct: false },
        { text: "Music of Changes", correct: false },
        { text: "In a Landscape", correct: false },
      ],
    },
    {
      question: "Which composer wrote the 'Transcendental Études'?",
      answers: [
        { text: "Franz Liszt", correct: true },
        { text: "Frédéric Chopin", correct: false },
        { text: "Sergei Rachmaninoff", correct: false },
        { text: "Claude Debussy", correct: false },
      ],
    },
    {
      question: "Which Baroque composer wrote the 'Goldberg Variations'?",
      answers: [
        { text: "Johann Sebastian Bach", correct: true },
        { text: "George Frideric Handel", correct: false },
        { text: "Domenico Scarlatti", correct: false },
        { text: "Antonio Vivaldi", correct: false },
      ],
    },
    {
      question: "Which opera by Richard Wagner is part of the 'Ring Cycle'?",
      answers: [
        { text: "Tristan und Isolde", correct: false },
        { text: "Die Walküre", correct: true },
        { text: "Parsifal", correct: false },
        { text: "Tannhäuser", correct: false },
      ],
    },
    {
      question:
        "Which composer is famous for his late-Romantic symphonies and song cycles?",
      answers: [
        { text: "Gustav Mahler", correct: true },
        { text: "Richard Strauss", correct: false },
        { text: "Jean Sibelius", correct: false },
        { text: "Anton Bruckner", correct: false },
      ],
    },
    {
      question:
        "The 'Concerto for Orchestra' was composed by which Hungarian composer?",
      answers: [
        { text: "Béla Bartók", correct: true },
        { text: "Zoltán Kodály", correct: false },
        { text: "Franz Liszt", correct: false },
        { text: "Ernő Dohnányi", correct: false },
      ],
    },
    {
      question:
        "The 'War Requiem' was composed by which 20th-century British composer?",
      answers: [
        { text: "Edward Elgar", correct: false },
        { text: "Ralph Vaughan Williams", correct: false },
        { text: "Benjamin Britten", correct: true },
        { text: "Frederick Delius", correct: false },
      ],
    },
    {
      question:
        "Who composed the opera 'Lady Macbeth of the Mtsensk District'?",
      answers: [
        { text: "Dmitri Shostakovich", correct: true },
        { text: "Sergei Prokofiev", correct: false },
        { text: "Igor Stravinsky", correct: false },
        { text: "Nikolai Rimsky-Korsakov", correct: false },
      ],
    },
    {
      question: "Who composed the opera 'Lulu'?",
      answers: [
        { text: "Arnold Schoenberg", correct: false },
        { text: "Alban Berg", correct: true },
        { text: "Anton Webern", correct: false },
        { text: "Richard Strauss", correct: false },
      ],
    },
    {
      question:
        "Which composer wrote the 'Symphony No. 7 in C Major, Op. 60' often called the 'Leningrad Symphony'?",
      answers: [
        { text: "Dmitri Shostakovich", correct: true },
        { text: "Sergei Prokofiev", correct: false },
        { text: "Igor Stravinsky", correct: false },
        { text: "Nikolai Rimsky-Korsakov", correct: false },
      ],
    },
    {
      question:
        "Which late Romantic composer is known for his tone poems such as 'Also sprach Zarathustra' and 'Don Juan'?",
      answers: [
        { text: "Gustav Mahler", correct: false },
        { text: "Anton Bruckner", correct: false },
        { text: "Richard Strauss", correct: true },
        { text: "Johannes Brahms", correct: false },
      ],
    },
    {
      question:
        "The 'Symphony No. 8 in E-flat major' is often referred to as the 'Symphony of a Thousand'. Who composed it?",
      answers: [
        { text: "Gustav Mahler", correct: true },
        { text: "Anton Bruckner", correct: false },
        { text: "Richard Strauss", correct: false },
        { text: "Johannes Brahms", correct: false },
      ],
    },
    {
      question: "Who wrote the 'Makrokosmos' series for solo piano?",
      answers: [
        { text: "John Cage", correct: false },
        { text: "George Crumb", correct: true },
        { text: "Elliott Carter", correct: false },
        { text: "Charles Ives", correct: false },
      ],
    },
    {
      question: "Which Baroque composer wrote the opera 'Rinaldo'?",
      answers: [
        { text: "George Frideric Handel", correct: true },
        { text: "Johann Sebastian Bach", correct: false },
        { text: "Antonio Vivaldi", correct: false },
        { text: "Domenico Scarlatti", correct: false },
      ],
    },
    {
      question: "Who composed the 'Sinfonia Antarctica'?",
      answers: [
        { text: "Ralph Vaughan Williams", correct: true },
        { text: "Edward Elgar", correct: false },
        { text: "Benjamin Britten", correct: false },
        { text: "William Walton", correct: false },
      ],
    },
    {
      question: "Which composer wrote the opera 'The Rake's Progress'?",
      answers: [
        { text: "Igor Stravinsky", correct: true },
        { text: "Sergei Prokofiev", correct: false },
        { text: "Dmitri Shostakovich", correct: false },
        { text: "Benjamin Britten", correct: false },
      ],
    },
    {
      question:
        "Who composed the 'Symphony No. 3 in C minor, Op. 78', known as the 'Organ Symphony'?",
      answers: [
        { text: "Camille Saint-Saëns", correct: true },
        { text: "Hector Berlioz", correct: false },
        { text: "César Franck", correct: false },
        { text: "Gabriel Fauré", correct: false },
      ],
    },
    {
      question:
        "Which composer is known for his cycle of piano works titled 'Miroirs'?",
      answers: [
        { text: "Claude Debussy", correct: false },
        { text: "Erik Satie", correct: false },
        { text: "Maurice Ravel", correct: true },
      ],
    },
    {
      question:
        "The 'Variations on a Theme of Paganini' is a work for piano composed by?",
      answers: [
        { text: "Franz Liszt", correct: false },
        { text: "Sergei Rachmaninoff", correct: true },
        { text: "Frederic Chopin", correct: false },
        { text: "Johannes Brahms", correct: false },
      ],
    },
    {
      question: "Which composer wrote the orchestral suite 'The Planets'?",
      answers: [
        { text: "Gustav Mahler", correct: false },
        { text: "Igor Stravinsky", correct: false },
        { text: "Gustav Holst", correct: true },
        { text: "Richard Strauss", correct: false },
      ],
    },
    {
      question:
        "The opera 'Peter Grimes' was composed by which 20th-century composer?",
      answers: [
        { text: "Benjamin Britten", correct: true },
        { text: "Ralph Vaughan Williams", correct: false },
        { text: "William Walton", correct: false },
        { text: "Edward Elgar", correct: false },
      ],
    },
    {
      question: "Who composed the 'Three Places in New England'?",
      answers: [
        { text: "Charles Ives", correct: true },
        { text: "Aaron Copland", correct: false },
        { text: "Samuel Barber", correct: false },
        { text: "John Adams", correct: false },
      ],
    },
    {
      question: "Which symphony is known as the 'Pathetique Symphony'?",
      answers: [
        { text: "Tchaikovsky's Symphony No. 6", correct: true },
        { text: "Beethoven's Symphony No. 3", correct: false },
        { text: "Mozart's Symphony No. 40", correct: false },
        { text: "Schubert's Symphony No. 8", correct: false },
      ],
    },
    {
      question:
        "Who composed the 'Symphony No. 9 in D minor, Op. 125', also known as the 'Choral Symphony'?",
      answers: [
        { text: "Johannes Brahms", correct: false },
        { text: "Ludwig van Beethoven", correct: true },
        { text: "Franz Schubert", correct: false },
        { text: "Felix Mendelssohn", correct: false },
      ],
    },
    {
      question:
        "The 'Symphonie espagnole' is a violin concerto by which composer?",
      answers: [
        { text: "Pablo de Sarasate", correct: false },
        { text: "Camille Saint-Saëns", correct: false },
        { text: "Ludwig van Beethoven", correct: false },
        { text: "Edouard Lalo", correct: true },
      ],
    },
    {
      question: "The opera 'Die Meistersinger von Nürnberg' was written by?",
      answers: [
        { text: "Richard Wagner", correct: true },
        { text: "Johann Strauss II", correct: false },
        { text: "Giuseppe Verdi", correct: false },
        { text: "Giacomo Puccini", correct: false },
      ],
    },
    {
      question: "Who composed the 'Six Brandenburg Concertos'?",
      answers: [
        { text: "Antonio Vivaldi", correct: false },
        { text: "Johann Sebastian Bach", correct: true },
        { text: "George Frideric Handel", correct: false },
        { text: "Domenico Scarlatti", correct: false },
      ],
    },
    {
      question: "The 'Suite bergamasque' includes which famous piece?",
      answers: [
        { text: "Clair de Lune", correct: true },
        { text: "Arabesque", correct: false },
        { text: "Reverie", correct: false },
        { text: "Children's Corner", correct: false },
      ],
    },
  ];

  //Question window components
  const chosenUsername = document.getElementById("chosenUsername");
  const questionCounter = document.getElementById("questionCounter");
  const questionText = document.getElementById("questionText"); //questionElement
  const answersContainer = document.getElementById("answersContainer"); //answerButtonsElement
  const nextQuestionBtn = document.getElementById("nextQuestionBtn"); //nextButton
  let shuffledQuestions, currentQuestionIndex;

  startQuizButton.addEventListener("click", startQuiz);

  /**
   * Upon clicking on Start the quiz, the quiz starts
   */
  function startQuiz() {
    //Hides startWindow and shows quizWindow when the user clicks on "Start the quiz"
    startWindow.classList.toggle("hide");
    quizWindow.classList.toggle("hide");
    //IF STATEMENT for choosing the right question pool
    if (easyMode.classList.contains("buttonSelected")) {
      
      //↓↓↓ CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app
      shuffledQuestions = easyQuestionsList.sort(() => Math.random() - 0.5);
      counter = 1;
      currentQuestionIndex = 0;
      setNextQuestion();

      function setNextQuestion() {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
      }
      //↑↑↑REDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app

      /**
       * Displays question and its answers
       */
      //↓↓↓ CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app
      function showQuestion(question) {
        chosenUsername.innerText = username;
        questionCounter.innerText = `Question ${counter}/5`;
        questionText.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            if (answer.correct) {
              //Assigns each button a data attribute with correct 
              //answers for evaluation
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', () => selectAnswer(button));
            answersContainer.appendChild(button);
          })
        }
        //↑↑↑CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app

        /** 
         * Disables all answer buttons as soon as a choice is made and
         * applies visual styling to provide feedback (right or wrong answer) 
         * to the user
         */
        //↓↓↓ CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app
        function selectAnswer(clickedButton) {
          Array.from(answersContainer.children).forEach(button => {
              button.disabled = true;
              setStatusClass(button, button.dataset.correct);
          });
        
          const correct = clickedButton.dataset.correct;
          setStatusClass(clickedButton, correct);
          //↑↑↑CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app

          nextQuestionBtn.disabled = false;
        }

        //Add clicking effect on Next Question button which allows navigation through quiz
        nextQuestionBtn.addEventListener("click", function () {
          counter++;
          if (counter > 5) {
            nextQuestionBtn.innerText = "Next";
            nextQuestionBtn.addEventListener("click", endOfQuiz);
          } else {
            currentQuestionIndex++;
            setNextQuestion();
          }
        })

        /**  
         * Triggers reset quizWindow for new question
         * Allows a new question and its possible answers to be displayed in the quizWindow
         */
        //↓↓↓ CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app
        function setNextQuestion() {
          resetState();
          showQuestion(shuffledQuestions[currentQuestionIndex]);
        }
        //↑↑↑CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app

        /**  
         * 
         */
        //↓↓↓ CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app
        function resetState() {
          clearStatusClass(document.body);
          nextQuestionBtn.disabled = true;
          while (answersContainer.firstChild) {
            answersContainer.removeChild(answersContainer.firstChild);
          }
        }
        //↑↑↑CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app

        /**  
         * Clears any previous feedback from answers
         * Assigns CSS right/wrong classes to provide visual
         * feedback about correctness/wrongness of answers
         */
        //↓↓↓ CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app
        function setStatusClass(element, correct) {
          clearStatusClass(element);
          if (correct) {
              element.classList.add('right');
          } else {
              element.classList.add('wrong');
          }
        }       
        //↑↑↑CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app 
        
        /**  
         * Removes previous feedback from answers
         */
        //↓↓↓ CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app
        function clearStatusClass(element) {
          element.classList.remove('correct');
          element.classList.remove('wrong');
        }
        //↑↑↑CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app 

        function endOfQuiz() {
          quizWindow.classList.toggle("hide");
          endOfQuizWindow.classList.toggle("hide");
          endOfQuizWindow.innerHTML = `<h2>Congratulations!</h2>`
        }
        //↑↑↑CREDIT: https://hackr.io/blog/how-to-build-a-javascript-quiz-app             
    } else if (mediumMode.classList.contains("buttonSelected")) {
        quizWindow.innerHTML = `<h2>WELCOME TO THE MEDIUM MODE</h2>`;
    } else if (hardMode.classList.contains("buttonSelected")) {
        quizWindow.innerHTML = `<h2>WELCOME TO THE HARD MODE</h2>`;
    }
  }
});
