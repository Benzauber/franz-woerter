var cards = 0;
var returnCards = [];
var complet = 0;
var finish = 0;
var again = 0;
var easteregg = 0;
var audio = false;
var wrong = 0;

var correctAudio = new Audio("correct-answer.wav");
var wrongAudio = new Audio("wrong-answer.wav");

function Return() {
  returnCards.push(cards);
  wrong = 1;
  next();
}

function process() {
  switch (cards) {
    case 1:
      document.getElementById("text").innerHTML = "der Kopf";
      document.getElementById("text2").innerHTML = "la tête";
      break;
    case 2:
      document.getElementById("text").innerHTML = "die Brust";
      document.getElementById("text2").innerHTML = "la poitrine";
      break;
    case 3:
      document.getElementById("text").innerHTML = "der Arm";
      document.getElementById("text2").innerHTML = "le bras";
      break;
    case 4:
      document.getElementById("text").innerHTML = "der Hintern";
      document.getElementById("text2").innerHTML = "le derrière";
      break;
    case 5:
      document.getElementById("text").innerHTML = "das Bein";
      document.getElementById("text2").innerHTML = "la jambe";
      break;
    case 6:
      document.getElementById("text").innerHTML = "das Knie";
      document.getElementById("text2").innerHTML = "le genou";
      break;
    case 7:
      document.getElementById("text").innerHTML = "der Fuss";
      document.getElementById("text2").innerHTML = "le pied";
      break;
    case 8:
      document.getElementById("text").innerHTML = "die Schulter";
      document.getElementById("text2").innerHTML = "l'épaule";
      break;
    case 9:
      document.getElementById("text").innerHTML = "die Hand";
      document.getElementById("text2").innerHTML = "la main";
      break;
    case 10:
      document.getElementById("text").innerHTML = "der Ellbogen";
      document.getElementById("text2").innerHTML = "le coude";
      break;
    case 11:
      document.getElementById("text").innerHTML = "der Finger";
      document.getElementById("text2").innerHTML = "le doigt";
      break;
    case 12:
      document.getElementById("text").innerHTML = "der Rücken";
      document.getElementById("text2").innerHTML = "le dos";
      break;
    case 13:
      document.getElementById("text").innerHTML = "der Bauch";
      document.getElementById("text2").innerHTML = "le ventre";
      break;
    case 14:
      document.getElementById("text").innerHTML = "die Hüfte";
      document.getElementById("text2").innerHTML = "la hanche";
      break;
    case 15:
      document.getElementById("text").innerHTML = "beugen";
      document.getElementById("text2").innerHTML = "plier";
      break;
    case 16:
      document.getElementById("text").innerHTML = "heben";
      document.getElementById("text2").innerHTML = "lever";
      break;
    case 17:
      document.getElementById("text").innerHTML = "senken";
      document.getElementById("text2").innerHTML = "baisser";
      break;
    case 18:
      document.getElementById("text").innerHTML = "hin und her schwingen";
      document.getElementById("text2").innerHTML = "balancer";
      break;
    case 19:
      document.getElementById("text").innerHTML = "neigen";
      document.getElementById("text2").innerHTML = "pencher";
      break;
    case 20:
      document.getElementById("text").innerHTML = "kreuzen";
      document.getElementById("text2").innerHTML = "croiser";
      break;
    case 21:
      document.getElementById("text").innerHTML = "spreizen";
      document.getElementById("text2").innerHTML = "écarter";
      break;
    case 22:
      document.getElementById("text").innerHTML = "drehen";
      document.getElementById("text2").innerHTML = "tourner";
      break;
    case 23:
      document.getElementById("text").innerHTML = "berühren";
      document.getElementById("text2").innerHTML = "toucher";
      break;
    case 24:
      document.getElementById("text").innerHTML = "bewegen";
      document.getElementById("text2").innerHTML = "bouger";
      break;
    case 25:
      document.getElementById("text").innerHTML = "strecken";
      document.getElementById("text2").innerHTML = "tendre";
      break;
    case 26:
      document.getElementById("text").innerHTML = "vorwärts gehen";
      document.getElementById("text2").innerHTML = "avancer";
      break;
    case 27:
      document.getElementById("text").innerHTML = "rückwärts gehen";
      document.getElementById("text2").innerHTML = "reculer";
      break;
    case 28:
      document.getElementById("text").innerHTML = "die Hüfte";
      document.getElementById("text2").innerHTML = "la hanche";
      complet = 1;
      finish = 1;
      break;
  }
}

function process2() {
  easteregg++;
  if (easteregg == 13) {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
  if (again != 1) {
    document.getElementById("text2").style.display = "block";
  }
}

function next() {
  easteregg = 0;
  if (complet === 0) {
    cards++;
  } else {
    cards = returnCards.shift();
  }
  if (again == 1) {
    window.location.reload();
  }
  if (finish == 1 && returnCards.length == 0 && cards === undefined) {
    document.getElementById("text").innerHTML = "Fertig";
    document.getElementById("canNot").style.display = "none";
    document.getElementById("can").innerHTML = "Nochmal";
    again = 1;
  }
  if (cards > 0) {
    document.getElementById("can").innerHTML = "Kann Ich";
    document.getElementById("canNot").style.display = "block";
  }
  if (cards > 1 && audio == true) {
    if (wrong == 1) {
      wrongAudio.play();
      wrong = 0;
    } else {
      correctAudio.play();
    }
  }
  process();
  document.getElementById("text2").style.display = "none";
  console.log(cards, returnCards, complet, finish, again);
}
function mute() {
  // Hole das Icon-Element
  const icon = document.querySelector(".swap-button i");
  // Überprüfe, ob das Icon aktuell auf "mute" steht
  if (icon.classList.contains("fa-volume-mute")) {
    // Ändere das Icon zu "volume-up"
    icon.classList.remove("fa-volume-mute");
    icon.classList.add("fa-volume-up");
    audio = true;
  } else {
    // Ändere das Icon zurück zu "mute"
    icon.classList.remove("fa-volume-up");
    icon.classList.add("fa-volume-mute");
    audio = false;
  }
}
