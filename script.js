function casser() {
    let prenomSupprimer = prompt("Qui voulez vous supprimer ?").toLowerCase();
    const elementADetruire = document.getElementById(prenomSupprimer);
    elementADetruire.parentNode.removeChild(elementADetruire);
  }
  
  function modify() {
    let modifText = prompt("Qui voulez vous modifier?").toLowerCase();
    let elementAModif = document.getElementById(modifText);
    let nouveauText = prompt("ecrivez ici le nouveau texte de " + modifText);
    let paragrapheAModifier = elementAModif.childNodes[7];
    paragrapheAModifier.innerText = nouveauText;
  }
  
  function addtask() {
    let prenom = prompt("Quel est votre prénom ?");
    let quelPoste;
    let texteDescription;

    if(prenom != null) {
      quelPoste = prompt("Quel est votre poste ?");
    }
    else {
      alert("vous avez annulé");
      return;
    }
    if(quelPoste != null) {
      texteDescription = prompt("Quel est votre texte ?");
    } 
    else {
      alert("vous avez annulé");
      return;
    }
    if(texteDescription == null) {
      alert("vous avez annulé");
      return;
    }
    if((prenom == "") && (quelPoste =="") && (texteDescription =="")) {
      alert("aucune donnée entrée");
    }
    else {
        let cardContenaire = document.querySelector(".lesImages");
      
        let image = document.createElement("img");
        image.src = "img/stoormtrooper.jpg";
      
        let h2 = document.createElement("h2");
        h2.innerText = prenom;
      
        let h3 = document.createElement("h3");
        h3.innerText = quelPoste;
        h3.classList.add("h3");
      
        let p = document.createElement("p");
        p.innerText = texteDescription;
        p.classList.add("lesPostes");
      
        let imageCard = document.createElement("div");
        imageCard.classList.add("image-card");
        imageCard.id = prenom.toLowerCase();
      
        imageCard.appendChild(image);
        imageCard.appendChild(h2);
        imageCard.appendChild(h3);
        imageCard.appendChild(p);
        cardContenaire.appendChild(imageCard); 

  }
}

  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
  
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });
  
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });

const nbArt = document.getElementById("nbArt");


let nbArticles = 0;
nbArt.innerHTML = nbArticles;
const addArt = () => {
    nbArticles = defineCount("count1") + defineCount("count2") + defineCount("count3") + defineCount("count4") + defineCount("count5") + defineCount("count6"); 
    nbArt.innerHTML = nbArticles;
}

addArt();

function defineCount(valeur){
  let nombre = sessionStorage.getItem(valeur);
  if(nombre == NaN || nombre == null ){
    return 0;
  }
  else{
    return parseInt(nombre);
  }
}