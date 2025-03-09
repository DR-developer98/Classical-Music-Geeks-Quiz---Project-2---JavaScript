document.addEventListener("DOMContentLoaded", function () {
  //------------------↓START PAGE QUIZ↓------------------
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

  const startWindow = document.getElementById("startWindow");
  const quizWindow = document.getElementById("quizWindow");
  const chooseMode = document.getElementById("chooseMode");
  const startForm = document.getElementById("startForm");
  startForm.addEventListener("submit", showModes);

  const modeButtons = document.getElementsByClassName("mode");
  const easyMode = document.getElementById("easyMode");
  const mediumMode = document.getElementById("mediumMode");
  const hardMode = document.getElementById("hardMode");
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
      if (btn.classList.contains("hide")) {
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

  //---------------↓QUIZ SECTION↓-----------------
  //↓QUESTION POOLS FOR THE DIFFERENT MODES↓
  const easyQuestionsList = [
    {
      questionText: "Who composed the 'Für Elise'?",
      answer1: "Johann Sebastian Bach",
      answer2: "Wolfgang Amadeus Mozart",
      answer3: "Ludwig van Beethoven", // correct
      answer4: "Franz Schubert",
    },
    {
      questionText: "Which composer wrote 'The Four Seasons'?",
      answer1: "Antonio Vivaldi", // correct
      answer2: "Johannes Brahms",
      answer3: "Frederic Chopin",
      answer4: "Giuseppe Verdi",
    },
    {
      questionText: "The opera 'Carmen' was composed by?",
      answer1: "Georges Bizet", // correct
      answer2: "Gioachino Rossini",
      answer3: "Richard Wagner",
      answer4: "Franz Liszt",
    },
    {
      questionText: "Which composer was known as the 'Waltz King'?",
      answer1: "Franz Schubert",
      answer2: "Johann Strauss II", // correct
      answer3: "Richard Strauss",
      answer4: "Franz Joseph Haydn",
    },
    {
      questionText: "Who composed the 'Moonlight Sonata'?",
      answer1: "Ludwig van Beethoven", // correct
      answer2: "Wolfgang Amadeus Mozart",
      answer3: "Franz Schubert",
      answer4: "Johann Sebastian Bach",
    },
    {
      questionText: "Who composed the ballet 'The Nutcracker'?",
      answer1: "Igor Stravinsky",
      answer2: "Pyotr Ilyich Tchaikovsky", // correct
      answer3: "Maurice Ravel",
      answer4: "Claude Debussy",
    },
    {
      questionText: "Which composer wrote 'Eine kleine Nachtmusik'?",
      answer1: "Ludwig van Beethoven",
      answer2: "Johann Sebastian Bach",
      answer3: "Wolfgang Amadeus Mozart", // correct
      answer4: "Joseph Haydn",
    },
    {
      questionText: "The 'Hallelujah Chorus' is part of which oratorio?",
      answer1: "The Creation",
      answer2: "Messiah", // correct
      answer3: "Elijah",
      answer4: "Requiem",
    },
    {
      questionText: "Who composed the 'William Tell Overture'?",
      answer1: "Gioachino Rossini", // correct
      answer2: "Antonio Vivaldi",
      answer3: "George Frideric Handel",
      answer4: "Ludwig van Beethoven",
    },
    {
      questionText: "Who composed 'The Blue Danube'?",
      answer1: "Johann Strauss II", // correct
      answer2: "Johann Sebastian Bach",
      answer3: "Wolfgang Amadeus Mozart",
      answer4: "Franz Schubert",
    },
    {
      questionText: "Who wrote the 'Brandenburg Concertos'?",
      answer1: "Johann Sebastian Bach", // correct
      answer2: "Ludwig van Beethoven",
      answer3: "Joseph Haydn",
      answer4: "Antonio Vivaldi",
    },
    {
      questionText: "Who composed 'Boléro'?",
      answer1: "Maurice Ravel", // correct
      answer2: "Claude Debussy",
      answer3: "Igor Stravinsky",
      answer4: "Sergei Prokofiev",
    },
    {
      questionText:
        "Who composed the 'Symphony No. 9 in D minor' (Ode to Joy)?",
      answer1: "Ludwig van Beethoven", // correct
      answer2: "Johannes Brahms",
      answer3: "Franz Schubert",
      answer4: "Felix Mendelssohn",
    },
    {
      questionText: "Who composed the 'Carnival of the Animals'?",
      answer1: "Camille Saint-Saëns", // correct
      answer2: "Claude Debussy",
      answer3: "Gabriel Fauré",
      answer4: "Hector Berlioz",
    },
    {
      questionText: "Which composer wrote 'Piano Sonata No. 16 in C Major'?",
      answer1: "Ludwig van Beethoven",
      answer2: "Johann Sebastian Bach",
      answer3: "Franz Schubert",
      answer4: "Wolfgang Amadeus Mozart", // correct
    },
  ];
  const mediumQuestionsList = [
    {
      questionText: "Which composer is known for his 'Canon in D'?",
      answer1: "Johann Pachelbel", // correct
      answer2: "Johann Sebastian Bach",
      answer3: "Antonio Vivaldi",
      answer4: "George Frideric Handel",
    },
    {
      questionText: "In which year was Ludwig van Beethoven born?",
      answer1: "1750",
      answer2: "1770", // correct
      answer3: "1790",
      answer4: "1810",
    },
    {
      questionText:
        "Which instrument did Frederic Chopin primarily compose for?",
      answer1: "Violin",
      answer2: "Piano", // correct
      answer3: "Cello",
      answer4: "Flute",
    },
    {
      questionText:
        "Which composer is associated with the term 'Impressionism'?",
      answer1: "Johannes Brahms",
      answer2: "Claude Debussy", // correct
      answer3: "Franz Liszt",
      answer4: "Ludwig van Beethoven",
    },
    {
      questionText:
        "The 'Rite of Spring' caused a riot at its premiere in 1913. Who composed it?",
      answer1: "Igor Stravinsky", // correct
      answer2: "Sergei Rachmaninoff",
      answer3: "Maurice Ravel",
      answer4: "Gustav Holst",
    },
    {
      questionText:
        "Which composer famously began losing his hearing in his late 20s?",
      answer1: "Ludwig van Beethoven", // correct
      answer2: "Wolfgang Amadeus Mozart",
      answer3: "Franz Schubert",
      answer4: "Joseph Haydn",
    },
    {
      questionText:
        "The 'Carnival of the Animals' is a work by which French composer?",
      answer1: "Camille Saint-Saëns", // correct
      answer2: "Claude Debussy",
      answer3: "Maurice Ravel",
      answer4: "Gabriel Fauré",
    },
    {
      questionText: "Who composed the opera 'Madama Butterfly'?",
      answer1: "Giacomo Puccini", // correct
      answer2: "Giuseppe Verdi",
      answer3: "Richard Wagner",
      answer4: "Ludwig van Beethoven",
    },
    {
      questionText:
        "Which symphony is often referred to as 'Beethoven's Tenth'?",
      answer1: "Brahms' Symphony No. 1", // correct
      answer2: "Schubert's Symphony No. 8",
      answer3: "Tchaikovsky's Symphony No. 6",
      answer4: "Dvorak's Symphony No. 9",
    },
    {
      questionText: "Which composer wrote the piece 'Gymnopédies'?",
      answer1: "Erik Satie", // correct
      answer2: "Claude Debussy",
      answer3: "Maurice Ravel",
      answer4: "Gabriel Fauré",
    },
    {
      questionText:
        "Which composer was a child prodigy and wrote his first symphony at age 8?",
      answer1: "Franz Schubert",
      answer2: "Ludwig van Beethoven",
      answer3: "Wolfgang Amadeus Mozart", // correct
      answer4: "Felix Mendelssohn",
    },
    {
      questionText:
        "The 'Brandenburg Concertos' were dedicated to which patron?",
      answer1: "Duke of Weimar",
      answer2: "Margrave of Brandenburg", // correct
      answer3: "Elector of Saxony",
      answer4: "Prince of Anhalt-Köthen",
    },
    {
      questionText: "Which composer wrote 'Carmina Burana'?",
      answer1: "Carl Orff", // correct
      answer2: "Richard Strauss",
      answer3: "Gustav Mahler",
      answer4: "Anton Bruckner",
    },
    {
      questionText: "Which piece features the famous 'Ode to Joy' theme?",
      answer1: "Beethoven's Symphony No. 9", // correct
      answer2: "Mozart's Symphony No. 40",
      answer3: "Haydn's Symphony No. 94",
      answer4: "Brahms' Symphony No. 1",
    },
    {
      questionText: "Which composer is known for his 'Hungarian Rhapsodies'?",
      answer1: "Franz Liszt", // correct
      answer2: "Bela Bartok",
      answer3: "Antonin Dvorak",
      answer4: "Johannes Brahms",
    },
    {
      questionText:
        "The 'Planets' suite by Gustav Holst contains how many movements?",
      answer1: "5",
      answer2: "7", // correct
      answer3: "9",
      answer4: "11",
    },
    {
      questionText: "Which composer is known for his twelve-tone technique?",
      answer1: "Igor Stravinsky",
      answer2: "Arnold Schoenberg", // correct
      answer3: "Sergei Prokofiev",
      answer4: "Richard Strauss",
    },
    {
      questionText:
        "The 'Enigma Variations' are a set of variations by which composer?",
      answer1: "Ralph Vaughan Williams",
      answer2: "Edward Elgar", // correct
      answer3: "Benjamin Britten",
      answer4: "Frederick Delius",
    },
    {
      questionText: "Which opera by Giuseppe Verdi is set in ancient Egypt?",
      answer1: "Rigoletto",
      answer2: "La Traviata",
      answer3: "Aida", // correct
      answer4: "Otello",
    },
    {
      questionText: "Which composer wrote the ballet 'The Nutcracker'?",
      answer1: "Pyotr Ilyich Tchaikovsky", // correct
      answer2: "Igor Stravinsky",
      answer3: "Sergei Prokofiev",
      answer4: "Dmitri Shostakovich",
    },
    {
      questionText:
        "The 'Symphonie fantastique' by Hector Berlioz is based on what?",
      answer1: "A love story", // correct
      answer2: "A mythical legend",
      answer3: "A historical event",
      answer4: "A philosophical treatise",
    },
  ];
  const hardQuestionsList = [
    {
      questionText:
        "Which composer is known for the invention of the twelve-tone technique?",
      answer1: "Arnold Schoenberg", // correct
      answer2: "Igor Stravinsky",
      answer3: "Dmitri Shostakovich",
      answer4: "Sergei Prokofiev",
    },
    {
      questionText:
        "The opera 'Boris Godunov' was composed by which Russian composer?",
      answer1: "Pyotr Ilyich Tchaikovsky",
      answer2: "Modest Mussorgsky", // correct
      answer3: "Nikolai Rimsky-Korsakov",
      answer4: "Sergei Rachmaninoff",
    },
    {
      questionText: "Which piece by John Cage is famously silent?",
      answer1: "4'33\"", // correct
      answer2: "Sonatas and Interludes",
      answer3: "Music of Changes",
      answer4: "In a Landscape",
    },
    {
      questionText: "Which composer wrote the 'Transcendental Études'?",
      answer1: "Franz Liszt", // correct
      answer2: "Frédéric Chopin",
      answer3: "Sergei Rachmaninoff",
      answer4: "Claude Debussy",
    },
    {
      questionText: "Which Baroque composer wrote the 'Goldberg Variations'?",
      answer1: "Johann Sebastian Bach", // correct
      answer2: "George Frideric Handel",
      answer3: "Domenico Scarlatti",
      answer4: "Antonio Vivaldi",
    },
    {
      questionText:
        "Which opera by Richard Wagner is part of the 'Ring Cycle'?",
      answer1: "Tristan und Isolde",
      answer2: "Die Walküre", // correct
      answer3: "Parsifal",
      answer4: "Tannhäuser",
    },
    {
      questionText:
        "Which composer is famous for his late-Romantic symphonies and song cycles?",
      answer1: "Gustav Mahler", // correct
      answer2: "Richard Strauss",
      answer3: "Jean Sibelius",
      answer4: "Anton Bruckner",
    },
    {
      questionText:
        "The 'Concerto for Orchestra' was composed by which Hungarian composer?",
      answer1: "Béla Bartók", // correct
      answer2: "Zoltán Kodály",
      answer3: "Franz Liszt",
      answer4: "Ernő Dohnányi",
    },
    {
      questionText:
        "The 'War Requiem' was composed by which 20th-century British composer?",
      answer1: "Edward Elgar",
      answer2: "Ralph Vaughan Williams",
      answer3: "Benjamin Britten", // correct
      answer4: "Frederick Delius",
    },
    {
      questionText:
        "Who composed the opera 'Lady Macbeth of the Mtsensk District'?",
      answer1: "Dmitri Shostakovich", // correct
      answer2: "Sergei Prokofiev",
      answer3: "Igor Stravinsky",
      answer4: "Nikolai Rimsky-Korsakov",
    },
    {
      questionText: "Who composed the opera 'Lulu'?",
      answer1: "Arnold Schoenberg",
      answer2: "Alban Berg", // correct
      answer3: "Anton Webern",
      answer4: "Richard Strauss",
    },
    {
      questionText:
        "Which composer wrote the 'Symphony No. 7 in C Major, Op. 60' often called the 'Leningrad Symphony'?",
      answer1: "Dmitri Shostakovich", // correct
      answer2: "Sergei Prokofiev",
      answer3: "Igor Stravinsky",
      answer4: "Nikolai Rimsky-Korsakov",
    },
    {
      questionText:
        "Which late Romantic composer is known for his tone poems such as 'Also sprach Zarathustra' and 'Don Juan'?",
      answer1: "Gustav Mahler",
      answer2: "Anton Bruckner",
      answer3: "Richard Strauss", // correct
      answer4: "Johannes Brahms",
    },
    {
      questionText:
        "The 'Symphony No. 8 in E-flat major' is often referred to as the 'Symphony of a Thousand'. Who composed it?",
      answer1: "Gustav Mahler", // correct
      answer2: "Anton Bruckner",
      answer3: "Richard Strauss",
      answer4: "Johannes Brahms",
    },
    {
      questionText: "Who wrote the 'Makrokosmos' series for solo piano?",
      answer1: "John Cage",
      answer2: "George Crumb", // correct
      answer3: "Elliott Carter",
      answer4: "Charles Ives",
    },
    {
      questionText: "Which Baroque composer wrote the opera 'Rinaldo'?",
      answer1: "George Frideric Handel", // correct
      answer2: "Johann Sebastian Bach",
      answer3: "Antonio Vivaldi",
      answer4: "Domenico Scarlatti",
    },
    {
      questionText: "Who composed the 'Sinfonia Antarctica'?",
      answer1: "Ralph Vaughan Williams", // correct
      answer2: "Edward Elgar",
      answer3: "Benjamin Britten",
      answer4: "William Walton",
    },
    {
      questionText: "Which composer wrote the opera 'The Rake's Progress'?",
      answer1: "Igor Stravinsky", // correct
      answer2: "Sergei Prokofiev",
      answer3: "Dmitri Shostakovich",
      answer4: "Benjamin Britten",
    },
    {
      questionText:
        "Who composed the 'Symphony No. 3 in C minor, Op. 78', known as the 'Organ Symphony'?",
      answer1: "Camille Saint-Saëns", // correct
      answer2: "Hector Berlioz",
      answer3: "César Franck",
      answer4: "Gabriel Fauré",
    },
    {
      questionText:
        "Which composer is known for his cycle of piano works titled 'Miroirs'?",
      answer1: "Claude Debussy",
      answer2: "Erik Satie",
      answer3: "Maurice Ravel",
    },
    {
      questionText:
        "The 'Variations on a Theme of Paganini' is a work for piano composed by?",
      answer1: "Franz Liszt",
      answer2: "Sergei Rachmaninoff", // correct
      answer3: "Frederic Chopin",
      answer4: "Johannes Brahms",
    },
    {
      questionText: "Which composer wrote the orchestral suite 'The Planets'?",
      answer1: "Gustav Mahler",
      answer2: "Igor Stravinsky",
      answer3: "Gustav Holst", // correct
      answer4: "Richard Strauss",
    },
    {
      questionText:
        "The opera 'Peter Grimes' was composed by which 20th-century composer?",
      answer1: "Benjamin Britten", // correct
      answer2: "Ralph Vaughan Williams",
      answer3: "William Walton",
      answer4: "Edward Elgar",
    },
    {
      questionText: "Who composed the 'Three Places in New England'?",
      answer1: "Charles Ives", // correct
      answer2: "Aaron Copland",
      answer3: "Samuel Barber",
      answer4: "John Adams",
    },
    {
      questionText: "Which symphony is known as the 'Pathetique Symphony'?",
      answer1: "Tchaikovsky's Symphony No. 6", // correct
      answer2: "Beethoven's Symphony No. 3",
      answer3: "Mozart's Symphony No. 40",
      answer4: "Schubert's Symphony No. 8",
    },
    {
      questionText:
        "Who composed the 'Symphony No. 9 in D minor, Op. 125', also known as the 'Choral Symphony'?",
      answer1: "Johannes Brahms",
      answer2: "Ludwig van Beethoven", // correct
      answer3: "Franz Schubert",
      answer4: "Felix Mendelssohn",
    },
    {
      questionText:
        "The 'Symphonie espagnole' is a violin concerto by which composer?",
      answer1: "Pablo de Sarasate",
      answer2: "Camille Saint-Saëns",
      answer3: "Ludwig van Beethoven",
      answer4: "Edouard Lalo", // correct
    },
    {
      questionText:
        "The opera 'Die Meistersinger von Nürnberg' was written by?",
      answer1: "Richard Wagner", // correct
      answer2: "Johann Strauss II",
      answer3: "Giuseppe Verdi",
      answer4: "Giacomo Puccini",
    },
    {
      questionText: "Who composed the 'Six Brandenburg Concertos'?",
      answer1: "Antonio Vivaldi",
      answer2: "Johann Sebastian Bach", // correct
      answer3: "George Frideric Handel",
      answer4: "Domenico Scarlatti",
    },
    {
      questionText: "The 'Suite bergamasque' includes which famous piece?",
      answer1: "Clair de Lune", // correct
      answer2: "Arabesque",
      answer3: "Reverie",
      answer4: "Children's Corner",
    },
  ];

  //Question window components
  const chosenUsername = document.getElementById("chosenUsername");
  const questionCounter = document.getElementById("questionCounter");
  const questionText = document.getElementById("questionText");
  const answer1 = document.getElementById("answer1");
  const answer2 = document.getElementById("answer2");
  const answer3 = document.getElementById("answer3");
  const answer4 = document.getElementById("answer4");
  const nextQuestionBtn = document.getElementById("nextQuestion");

  startQuizButton.addEventListener("click", startQuiz);

  //QUIZ START FUNCTION
  function startQuiz() {
    //Hides startWindow and shows quizWindow when the user clicks on "Start the quiz"
    startWindow.classList.toggle("hide");
    quizWindow.classList.toggle("hide");
    //IF STATEMENT for choosing the right question pool 
    if (easyMode.classList.contains("buttonSelected")) {
      quizWindow.innerHTML = `<h2>WELCOME TO THE EASY MODE</h2>`;
    } else if (mediumMode.classList.contains("buttonSelected")) {
      quizWindow.innerHTML = `<h2>WELCOME TO THE MEDIUM MODE</h2>`;
    } else if (hardMode.classList.contains("buttonSelected")) {
      quizWindow.innerHTML = `<h2>WELCOME TO THE HARD MODE</h2>`;
    }
  }
});
