// Array of objects that stores the quiz questions.
const questions = [
  {
    question: "Who is the king of the Greek gods in Greek Mythology?",
    options: ["Apollo", "Hades", "Zeus", "Poseidon"],
    correct: "Zeus",
  },
  {
    question:
      "Which Greek hero is known for his incredible strength and completing the Twelve Labors?",
    options: ["Perseus", "Theseus", "Hercules", "Achilles"],
    correct: "Hercules",
  },
  {
    question: "What is the name of the winged horse in Greek mythology?",
    options: ["Pegasus", "Centaur", "Minotaur", "Chimera"],
    correct: "Pegasus",
  },
  {
    question:
      "Which Greek goddess is associated with wisdom, courage, and warfare?",
    options: ["Aphrodite", "Athena", "Hera", "Demeter"],
    correct: "Athena",
  },
  {
    question: "Who is the god of the sea in Greek mythology?",
    options: ["Hades", "Apollo", "Hermes", "Poseidon"],
    correct: "Poseidon",
  },
  {
    question:
      "Which hero is known for his role in the Trojan War and his vulnerable heel?",
    options: ["Odysseus", "Achilles", "Jason", "Perseus"],
    correct: "Achilles",
  },
  {
    question:
      "What monster had snakes for hair and could turn anyone to stone with her gaze?",
    options: ["Medusa", "Gorgon", "Siren", "Harpy"],
    correct: "Medusa",
  },
  {
    question: "Who is the Greek god of the underworld?",
    options: ["Hermes", "Hades", "Ares", "Dionysus"],
    correct: "Hades",
  },
  {
    question:
      "Which famous ship, crewed by heroes, sailed on a quest for the Golden Fleece?",
    options: ["The Argo", "The Odyssey", "The Nautilus", "The Beagle"],
    correct: "The Argo",
  },
  {
    question: "Who is the goddess of love and beauty in Greek Mythology?",
    options: ["Artemis", "Hestia", "Aphrodite", "Persephone"],
    correct: "Aphrodite",
  },
];

/* Variables that store the current question index, the user's score, and references to the HTML elements where the question, answer options, and score are displayed.*/
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

/* Function that displays the current question and its answer options on the page. It dynamically generates radio buttons and labels for each answer option */
function displayQuestion() {
  const question = questions[currentQuestion];
  questionElement.innerText = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = option;
    input.id = `option${index}`;

    const label = document.createElement("label");
    label.setAttribute("for", `option${index}`);
    label.textContent = option;

    optionsElement.appendChild(input);
    optionsElement.appendChild(label);
  });
}

/* Function that handles what happens when the user clicks the "next" button. It checks if an option is selected, updates the score, advances to the next question, and handles the end of the quiz. It also resets radio buttons for the next question*/
function nextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    if (selectedOption.value === questions[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;

    /* Checks whether there are more questions to display or if the quiz is completed. If all questions are answered, it displays a completion message and the final score */
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      questionElement.innerText = "Quiz completed! Thanks for playing.";
      optionsElement.innerHTML = "";

      // Display the score at the end of the quiz
      scoreElement.style.display = "block"; // Show the score
      scoreElement.innerText = `Score: ${score} out of ${questions.length}`;
    }

    // Reset radio buttons for the next question
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach((radio) => {
      radio.checked = false;
    });
  } else {
    alert("Please select an answer.");
  }
}

displayQuestion();
