
var cards = 0;
var returnCards = [];
var complet = 0;
var finish = 0;
var again = 0;
var easteregg = 0;

function Return() {
  returnCards.push(cards);
  next();
}
function process() {
    switch (cards) {
        case 1:
            document.getElementById("text").innerHTML = "La voie ";
            document.getElementById("text2").innerHTML = "das Gleis";
        break;
        case 2:
            document.getElementById("text").innerHTML = "Le quai ";
            document.getElementById("text2").innerHTML = "das Perron, der Bahnsteig";
        break;
        case 3:
            document.getElementById("text").innerHTML = "Le départ ";
            document.getElementById("text2").innerHTML = "die Abfahrt";
        break;
        case 4:
            document.getElementById("text").innerHTML = "L’arrivée ";
            document.getElementById("text2").innerHTML = "die Ankunft";
        break;
        case 5:
            document.getElementById("text").innerHTML = "Le contrôleur/la contrôleuse ";
            document.getElementById("text2").innerHTML = "der Zugbegleiter/die Zugbegleiterin";
        break;
        case 6:
            document.getElementById("text").innerHTML = "L’annonce ";
            document.getElementById("text2").innerHTML = "die Lautsprecherdurchsage";
        break;
        case 7:
            document.getElementById("text").innerHTML = "Le train arrive sur la voie 5. ";
            document.getElementById("text2").innerHTML = "Der Zug kommt auf Gleis 5 an.";
        break;
        case 8:
            document.getElementById("text").innerHTML = "À l’heure ";
            document.getElementById("text2").innerHTML = "pünktlich";
        break;
        case 9:
            document.getElementById("text").innerHTML = "En retard ";
            document.getElementById("text2").innerHTML = "verspätet";
        break;
        case 10:
            document.getElementById("text").innerHTML = "Être annulé/annulée ";
            document.getElementById("text2").innerHTML = "ausfallen";
        break;
        case 11:
            document.getElementById("text").innerHTML = "Le train est annulé. ";
            document.getElementById("text2").innerHTML = "Der Zug fällt aus.";
        break;
        case 12:
            document.getElementById("text").innerHTML = "Présenter le billet ";
            document.getElementById("text2").innerHTML = "das Billett zeigen";
        break;
        case 13:
            document.getElementById("text").innerHTML = "Monter dans le train ";
            document.getElementById("text2").innerHTML = "in den Zug einsteigen";
        break;
        case 14:
            document.getElementById("text").innerHTML = "Descendre du train ";
            document.getElementById("text2").innerHTML = "aus dem Zug aussteigen";
        break;
        case 15:
            document.getElementById("text").innerHTML = "Changer de train ";
            document.getElementById("text2").innerHTML = "umsteigen";
        break;
        case 16:
            document.getElementById("text").innerHTML = "Les gens montent dans le train. ";
            document.getElementById("text2").innerHTML = "Die Leute steigen in den Zug ein.";
        break;
        case 17:
            document.getElementById("text").innerHTML = "Le wagon ";
            document.getElementById("text2").innerHTML = "der Zugwagen";
        break;
        case 18:
            document.getElementById("text").innerHTML = "Le compartiment ";
            document.getElementById("text2").innerHTML = "das Zugabteil";
        break;
        case 19:
            document.getElementById("text").innerHTML = "Le siège ";
            document.getElementById("text2").innerHTML = "der Sitz";
        break;
        case 20:
            document.getElementById("text").innerHTML = "La fenêtre ";
            document.getElementById("text2").innerHTML = "das Fenster";
        break;
        case 21:
            document.getElementById("text").innerHTML = "La valise ";
            document.getElementById("text2").innerHTML = "der Koffer";
        break;
        case 22:
            document.getElementById("text").innerHTML = "La jeune femme a rangé sa valise. ";
            document.getElementById("text2").innerHTML = "Die junge Frau hat ihren Koffer verstaut.";
        break;
        case 23:
            document.getElementById("text").innerHTML = "Ranger ";
            document.getElementById("text2").innerHTML = "verstauen, wegräumen";
        break;
        case 24:
            document.getElementById("text").innerHTML = "Quitter ";
            document.getElementById("text2").innerHTML = "verlassen";
        break;
        case 25:
            document.getElementById("text").innerHTML = "Observer ";
            document.getElementById("text2").innerHTML = "beobachten";
        break;
        case 26:
            document.getElementById("text").innerHTML = "L’homme musclé a quitté le compartiment. ";
            document.getElementById("text2").innerHTML = "Der muskulöse Mann hat das Zugabteil verlassen.";
        break;
        case 27:
            document.getElementById("text").innerHTML = "Le passager/la passagère ";
            document.getElementById("text2").innerHTML = "der Zugreisende/die Zugreisende";
        break;
        case 28:
            document.getElementById("text").innerHTML = "Les passagers sont descendus du train. ";
            document.getElementById("text2").innerHTML = "Die Zugreisenden sind aus dem Zug ausgestiegen.";
        break;
        case 29:
            document.getElementById("text").innerHTML = "un touriste";
            document.getElementById("text2").innerHTML = "ein Tourist";
        break;
        case 30:
            document.getElementById("text").innerHTML = "un voyageur";
            document.getElementById("text2").innerHTML = "ein Reisender";
        break;
        case 31:
            document.getElementById("text").innerHTML = "avant";
            document.getElementById("text2").innerHTML = "vor";
            complet = 1;
            finish = 1;
        break;
    }
}

  function process2() {
  easteregg++;
  if (easteregg == 13){
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
  process();
  document.getElementById("text2").style.display = "none";
  console.log(cards, returnCards, complet, finish, again);

  
}
