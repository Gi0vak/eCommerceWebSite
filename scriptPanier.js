// -------------CAROUSEL-------------

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



// -------------- Nombres d'articles --------------

let nbArticle = 5;

// -------------BOUTONS PLUS ET MOINS 1-------------


const decrementCount1 = document.getElementById("decrement-count1");
const incrementCount1 = document.getElementById("increment-count1");

const totalCount1 = document.getElementById("total-count1");

let count1 = 1;

totalCount1.innerHTML = count1;

const handleDecrement1 = () => {
  count1--;
  totalCount1.innerHTML = count1;
  if (count1 <= 0) {
    const deleteProduct1 = document.getElementById('container1')
    deleteProduct1.parentNode.removeChild(deleteProduct1);
    if (nbArticle > 1) {
      nbArticle -= 1;
    }
    else {
      destroyFonction();
      }
    }
};

const handleIncrement1 = () => {
    count1++;
    totalCount1.innerHTML = count1;
  };

incrementCount1.addEventListener("click", handleIncrement1);
decrementCount1.addEventListener("click", handleDecrement1);


// -------------BOUTONS PLUS ET MOINS 2-------------

const decrementCount2 = document.getElementById("decrement-count2");
const incrementCount2 = document.getElementById("increment-count2");

const totalCount2 = document.getElementById("total-count2");

let count2 = 1;

totalCount2.innerHTML = count2;

const handleDecrement2 = () => {
  count2--;
  totalCount2.innerHTML = count2;
  if (count2 <= 0) {
    const deleteProduct2 = document.getElementById('container2')
    deleteProduct2.parentNode.removeChild(deleteProduct2);
    if (nbArticle >1) {
      nbArticle -= 1;
    }
    else {
      destroyFonction();
      }
      }
};

const handleIncrement2 = () => {
    count2++;
    totalCount2.innerHTML = count2;
  };

incrementCount2.addEventListener("click", handleIncrement2);
decrementCount2.addEventListener("click", handleDecrement2);


// -------------BOUTONS PLUS ET MOINS 3-------------

const decrementCount3 = document.getElementById("decrement-count3");
const incrementCount3 = document.getElementById("increment-count3");

const totalCount3 = document.getElementById("total-count3");

let count3 = 1;

totalCount3.innerHTML = count3;

const handleDecrement3 = () => {
  count3--;
  totalCount3.innerHTML = count3;
  if (count3 <= 0) {
    const deleteProduct3 = document.getElementById('container3')
    deleteProduct3.parentNode.removeChild(deleteProduct3); 
    if (nbArticle >1) {
      nbArticle -= 1;
    }
    else {
      destroyFonction();
      }
    }
};

const handleIncrement3 = () => {
    count3++;
    totalCount3.innerHTML = count3;
  };

incrementCount3.addEventListener("click", handleIncrement3);
decrementCount3.addEventListener("click", handleDecrement3);


// -------------BOUTONS PLUS ET MOINS 4-------------

const decrementCount4 = document.getElementById("decrement-count4");
const incrementCount4 = document.getElementById("increment-count4");

const totalCount4 = document.getElementById("total-count4");

let count4 = 1;

totalCount4.innerHTML = count4;

const handleDecrement4 = () => {
  count4--;
  totalCount4.innerHTML = count4;
  if (count4 <= 0) {
    const deleteProduct4 = document.getElementById('container4')
    deleteProduct4.parentNode.removeChild(deleteProduct4);
    if (nbArticle >1) {
      nbArticle -= 1;
    }
    else {
      destroyFonction();
      }
  }
};

const handleIncrement4 = () => {
    count4++;
    totalCount4.innerHTML = count4;
  };

incrementCount4.addEventListener("click", handleIncrement4);
decrementCount4.addEventListener("click", handleDecrement4);


// -------------BOUTONS PLUS ET MOINS 5-------------

const decrementCount5 = document.getElementById("decrement-count5");
const incrementCount5 = document.getElementById("increment-count5");

const totalCount5 = document.getElementById("total-count5");

let count5 = 1;

totalCount5.innerHTML = count5;

const handleDecrement5 = () => {
  count5--;
  totalCount5.innerHTML = count5;
  if (count5 <= 0) {
    const deleteProduct5 = document.getElementById('container5')
    deleteProduct5.parentNode.removeChild(deleteProduct5);
    if (nbArticle >1) {
      nbArticle -= 1;
    }
    else {
      destroyFonction();
      }
    }
  // else if (count5 > 0) {
  //   basket.shift();
  //   totalCalcul.textContent = refreshPrice();
  // }
};

const handleIncrement5 = () => {
    count5++;
    totalCount5.innerHTML = count5;
    // basket.push (5);
    // totalCalcul.textContent = refreshPrice();
    // console.log(refreshPrice());
  };

incrementCount5.addEventListener("click", handleIncrement5);
decrementCount5.addEventListener("click", handleDecrement5);



// --------- CALCULER TOTAL ---------

let price1 = document.getElementById('priceProduct1');
priceProduct1 = 120;
price1.innerHTML = priceProduct1;
let price2 = document.getElementById('priceProduct2');
priceProduct2 = 140;
price2.innerHTML = priceProduct2;
let price3 = document.getElementById('priceProduct3');
priceProduct3 = 45;
price3.innerHTML = priceProduct3;
let price4 = document.getElementById('priceProduct4');
priceProduct4 = 70;
price4.innerHTML = priceProduct4;
let price5 = document.getElementById('priceProduct5');
priceProduct5 = 90;
price5.innerHTML = priceProduct5;

const buttonTotalCalcul = document.getElementById("button-calcul");
const total_calcul = document.getElementById("total-calcul");

let total = 0;
total_calcul.innerHTML = total;
let calculation = () => {
  let totalProduct1 = ((count1 * priceProduct1) + (count2 * priceProduct2) + (count3 * priceProduct3) + (count4 * priceProduct4) + (count5 * priceProduct5));
  total = totalProduct1;
  total_calcul.innerHTML = total;
}
buttonTotalCalcul.addEventListener("click", calculation);


// let basket = []

// function refreshPrice() {
//   const valeurTotal = 0;
//   const prixTotalduPanier = basket.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     valeurTotal
//     );
//     return prixTotalduPanier;
//   }

// --------- PANIER VIDE ---------

const panier_vide = ('<p style="display:flex;margin:auto;background-color:#FF5E5E;text-align:center;justify-content:center;shadow-box:5px 5px 5px 7px rgba(0,0,0,0.65);width:70%;height:250px;border-radius: 40px;">Vide ton panier est, jeune Padawan... :(</p>')

function destroyFonction() {
    const detruire = document.getElementById('main');
    detruire.parentNode.removeChild(detruire);
    document.getElementById('panier-vide').innerHTML = panier_vide;
  }

const emptyBasket = document.getElementById('empty-basket');
emptyBasket.addEventListener('click', destroyFonction);



const article1 = document.getElementById("newArticle1");
const getArticle1 = sessionStorage.getItem("Obiwan",article1);


if(sessionStorage.getItem("Obiwan",article1) != null){
  article1.innerHTML += '<div class="product-container"><div class="image-product" type="image"><img src="https://i.postimg.cc/BbGJZ72J/obi.jpg" alt="Obiwan"></div><div class="name-product">Obiwan</div><div class="price-product"><span id="priceProduct"></span> €</div><div class="total-switch"><div id="decrement-count"><button type="text" >-</button></div><div id="total-count" class="qty"></div><div id="increment-count"><button type="text" >+</button></div></div></div>';
}
else{
  article1.style.display = "none";
}
/*Ajouter les produits de la page boutique via le localStorage*/
/*let getArticle1 = localStorage.getItem("article1", article1);*/
  /*newArticle1.style.display = 'grid';
    newArticle1.classList.add('article');*/