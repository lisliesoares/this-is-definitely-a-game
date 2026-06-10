let gameOver = false;

const questions = [
  "O que chamou atenção em mim quando nos reencontramos?",
  "Cite um lugar inusitado pra rolar uma sacanagem",
  "Qual a sensação de comer cu de curioso?😝KKKKK",
  "O que acha que eu queria ser quando criança?",
  "Uma coisa que ama em si mesmo(a)",
  "Algo pelo qual seja grato(a)",
  "Me conte um hiperfoco que durou muito e sumiu do nada",
  "O que faria esse ano se dinheiro não fosse um problema?",
  "Você acha que a forma como se vê e é visto por outros é parecida?",
  "Em que tipo de estereótipo você me enquadraria?",
  "Cite algo que aprendeu a 'não levar pro pessoal' comigo",
  "Uma parte favorita no meu corpo",
  "Qual a maior gentileza que fez pra si mesmo(a) esse mês?",
  "Uma lição pessoal que nossa relação te ensinou",
  "Um hábito que você gostaria de abandonar",
  "Qual sua memória mais feliz do ano passado?\nE a mais triste?",
  "Algo bom e algo ruim que seus pais te ensinaram sobre o amor",
  "Algo que gostaria de fazer com mais frequência",
  "Cite as 3 coisas mais importantes num relacionamento",
  "Cite algo em que você se acha melhor que a maioria\n (Liberou a soberba 🤤)",
  "Como você se sente sobre iniciar o sexo?",
  "O traço mais tóxico que consegue admitir em si mesmo(a)",
  "Algo que te deixa animado(a) pelo futuro",
  "Qual impressão inicial sobre mim acabou se provando o contrário?",
  "Num momento difícil, como você gosta de ser acolhido(a)?",
  "Quando foi a última vez que você chorou e por que?",
  "Algo que admira sobre mim",
  "O que você gostaria que a gente fizesse mais na nossa relação?",
  "Se pudesse mudar uma coisa em si mesmo(a), o que seria?",
  "Uma parte da personalidade que você não usa muito",
  "Como você me descreveria pra um estranho?",
  "Algo em que esteja trabalhando sobre si que os outros não veem",
  "Já te ajudei a entender algo sobre si mesmo(a)?",
  "Algo que temos muito em comum é..",
  "O que já fiz e te magoou, mas você não me contou?",
  "Quando meu lanchinho favorito?",
  "Quando foi a última vez em que você precisou de ajuda e não pediu?",
  "Qual minha maior fraqueza na sua opinião?",
  "Um arrependimento",
  "O que você gostaria de esquecer pra ver novo comigo?",
  "Qual a maior dor (não física) que já sentiu?",
  "Como você vê a gente no futuro?",
  "Uma insegurança em si mesmo(a)",
  "Algo que parei de fazer e você sente falta",
  "Eu fico sexy quando..",
  "Um date que você gostaria de fazer no futuro",
  "Qual foi a coisa mais difícil de revelar sobre si mesmo(a) no nosso tempo juntos?",
  "Que tipo de situação social te faz sentir mais estranho(a)?",
  "Você acha que eu sou o que você esperava?",
  "Algo sobre mim que acha difícil de entender",
  "Que partes de si mesmo(a) você vê em mim? E o oposto?",
  "Que tipo de salgadinho eu seria?",
  "Se a gente terminasse: o que você acha que levaria consigo?"
];

let unusedQuestions = [...questions];

const card = document.getElementById("card");
const questionText = document.getElementById("question");

const flipButton = document.getElementById("flipButton");
const nextButton = document.getElementById("nextButton");

function restartGame() {

  unusedQuestions = [...questions];

  card.classList.remove("flipped");

  flipButton.style.display = "inline-block";

  nextButton.innerText = "❥ Next Card";

  gameOver = false;

  setTimeout(() => {
    questionText.innerText = "Quem começa? ♥";
  }, 800);

}

function flipCard() {
  card.classList.toggle("flipped");
}

function nextCard() {

  // If the game ended, restart instead
  if (gameOver) {
    restartGame();
    return;
  }

  // Don't allow drawing a new card while one is revealed
  if (card.classList.contains("flipped")) {

    card.classList.remove("shake");
    void card.offsetWidth;
    card.classList.add("shake");

    return;
  }

  // Heartbeat animation
  const front = document.querySelector(".card-front");

  front.classList.remove("animate");
  void front.offsetWidth;
  front.classList.add("animate");

  // Make sure we're showing the front
  card.classList.remove("flipped");

  // Deck empty?
  if (unusedQuestions.length === 0) {

  questionText.innerText = "O jogo acabou \n (Mas a gente só começou)\n ♥";

  card.classList.add("flipped");

  flipButton.style.display = "none";

  nextButton.innerText = "❥ Recomeçar";

  gameOver = true;
    
return;
    
}

  const randomIndex =
    Math.floor(Math.random() * unusedQuestions.length);

  const selectedQuestion =
    unusedQuestions[randomIndex];

  questionText.innerText = selectedQuestion;

  unusedQuestions.splice(randomIndex, 1);
}
