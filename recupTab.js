                                                    /*fonctions*/



function removeElementsByClass(textDate){
    const allDate = document.getElementsByClassName(textDate);
    while(allDate.length > 0){
        allDate[0].parentNode.removeChild(allDate[0]);
    }
};

function addElement(article){
  let newContent = sessionStorage.getItem(article);
  if(newContent != null) {
    let newArt =  document.createElement("div");
    main.appendChild(newArt);
    newArt.innerHTML = newContent;
    newArt.className = 'article';
    let number = article[3];
    newArt.setAttribute('id','article'+ number);
  } 
  else {
    return;
  }
};

function addTotalCount(count){
  let newCount = sessionStorage.getItem(count);
  if(newCount != null || newCount != undefined) {
    let number = count[5];
    console.log(number);
  } 
  else {
    return;
  }
};

function panierVide(){
  sessionStorage.clear();
  main.innerHTML = panier_vide;
  nbArt.innerHTML = 0;
};

function defineCount(valeur){
  let nombre = sessionStorage.getItem(valeur);
  if(nombre == NaN || nombre == null){
    return 0;
  }
  else{
    return parseInt(nombre);
  }
};
const addArt = () => {
  let nbArticles = 0;
    nbArticles = defineCount("count1") 
              + defineCount("count2") 
              + defineCount("count3") 
              + defineCount("count4") 
              + defineCount("count5") 
              + defineCount("count6"); 
    nbArt.innerHTML = nbArticles;
};

const supprArt = ()=>{
  nbArticles --;
}


/*Carrousel*/


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

                         /* Récupération produit existant en session*/

const nbArt = document.getElementById("nbArt");
const main = document.getElementById("main");
const panier_vide = ('<p style="font-size:1.4rem;display:flex;margin:auto;background-color:#FF5E5E;justify-content:center;align-items:center;shadow-box:5px 5px 5px 7px rgba(0,0,0,0.65);width:70%;height:250px;border-radius: 40px;">Vide est ton panier... :(</p>');


for(let i = 1; i < 14; i++)  {
  let number = String(i);
  addElement("art" + number);
  console.log(number);
};

for(let i = 0; i < 14; i++)  {
  let number = String(i);
  addTotalCount("count" + number);
};

if(main.childElementCount == 0){
  panierVide();
}


let totalSelect = sessionStorage.getItem('total');
console.log(totalSelect);

let totalCalcul = document.getElementById("totalPx");

totalCalcul.innerHTML = totalSelect;

let prixTotal = parseInt(totalCalcul.innerHTML);
console.log(prixTotal);

                                          /*Produit 1 Obiwan*/

const art1 = sessionStorage.getItem("art1"); 
if(art1 != null){  
  const produitPrix1 = document.getElementById("pxProduit1").innerHTML;
  const valeur1 = parseInt(produitPrix1); 
                             
  let decrementCount1 = document.getElementById("decrement-count1");      
  let incrementCount1 = document.getElementById("increment-count1");    
  const totalCount1 = document.getElementById("total-count1");           
  let article1 = document.getElementById("article1").innerHTML;  

  let count1 = sessionStorage.getItem("count1");                                                        
  totalCount1.innerHTML = count1;


  let handleIncrement1 = () => {                                                         
      count1++;                                                         
      totalCount1.innerHTML = count1;
      prixTotal += valeur1;
      totalCalcul.innerHTML = prixTotal;
      sessionStorage.setItem("art1",article1);                           
              
  };
  let handleDecrement1 = () => { 
       
      if (count1 > 0) {       
        count1--;                                              
        totalCount1.innerHTML = count1;
        prixTotal -= valeur1;
        totalCalcul.innerHTML = prixTotal;
      };
      if (count1 == 0 ) { 
        let article1 = document.getElementById("article1");
        main.removeChild(article1);
        sessionStorage.removeItem("art1");
        if(main.childElementCount == 0){
          panierVide();
        };
      };
  };

  incrementCount1.addEventListener("click", handleIncrement1);
  decrementCount1.addEventListener("click", handleDecrement1);
}
                                            /*Produit 2 Chewbacca*/

const art2 = sessionStorage.getItem("art2"); 
if(art2 != null){                                                    
  let produitPrix2 = document.getElementById("pxProduit2").innerHTML; 
  let valeur2 = parseInt(produitPrix2);                               
  let decrementCount2 = document.getElementById("decrement-count2");      
  let incrementCount2 = document.getElementById("increment-count2");    
  const totalCount2 = document.getElementById("total-count2");           
  let article2 = document.getElementById("article2").innerHTML;       

  let count2 = sessionStorage.getItem("count2");                                                        
  totalCount2.innerHTML = count2;


  let handleIncrement2 = () => {   
                                                            
      count2++;                                                         
      totalCount2.innerHTML = count2; 
      prixTotal += valeur2;
      totalCalcul.innerHTML = prixTotal;
      sessionStorage.setItem("art2",article2);                           
              
  };
  let handleDecrement2 = () => { 
       
      if (count2 > 0) {       
        count2--;                                                      
        totalCount2.innerHTML = count2;
        prixTotal -= valeur2;
        totalCalcul.innerHTML = prixTotal;
      };
      if (count2 == 0 ) { 
        let article2 = document.getElementById("article2");
        main.removeChild(article2);
        sessionStorage.removeItem("art2");

        if(main.childElementCount == 0){
          panierVide();
        };
      };
  };

  incrementCount2.addEventListener("click", handleIncrement2);
  decrementCount2.addEventListener("click", handleDecrement2);
}

                                        /*Produit 3 Jar Jar*/

const art3 = sessionStorage.getItem("art3"); 
if(art3 != null){                                                    
  let produitPrix3 = document.getElementById("pxProduit3").innerHTML; 
  let valeur3 = parseInt(produitPrix3);                               
  let decrementCount3 = document.getElementById("decrement-count3");      
  let incrementCount3 = document.getElementById("increment-count3");    
  const totalCount3 = document.getElementById("total-count3");           
  let article3 = document.getElementById("article3").innerHTML;       

  let count3 = sessionStorage.getItem("count3");                                                        
  totalCount3.innerHTML = count3;


  let handleIncrement3 = () => {   
                                                            
      count3++;                                                         
      totalCount3.innerHTML = count3; 
      prixTotal += valeur3;
      totalCalcul.innerHTML = prixTotal;
      sessionStorage.setItem("art3",article3);                           
              
  };
  let handleDecrement3 = () => { 
       
      if (count3 > 0) {       
        count3--;                                                      
        totalCount3.innerHTML = count3;
        prixTotal -= valeur3;
        totalCalcul.innerHTML = prixTotal;
      };
      if (count3 == 0 ) { 
        let article3 = document.getElementById("article3");
        main.removeChild(article3);
        sessionStorage.removeItem("art3");

        if(main.childElementCount == 0){
          panierVide();
        };
      };
  };

  incrementCount3.addEventListener("click", handleIncrement3);
  decrementCount3.addEventListener("click", handleDecrement3);
};

                                        /*Produit 4 Stortrooper*/
const art4 = sessionStorage.getItem("art4");              
if(art4 != null){                                        
  let produitPrix4 = document.getElementById("pxProduit4").innerHTML; 
  let valeur4 = parseInt(produitPrix4);                               
  let decrementCount4 = document.getElementById("decrement-count4");      
  let incrementCount4 = document.getElementById("increment-count4");    
  const totalCount4 = document.getElementById("total-count4");           
  let article4 = document.getElementById("article4").innerHTML;       

  let count4 = sessionStorage.getItem("count4");                                                        
  totalCount4.innerHTML = count4;


  let handleIncrement4 = () => {   
                                                            
      count4++;                                                         
      totalCount4.innerHTML = count4; 
      prixTotal += valeur4;
      totalCalcul.innerHTML = prixTotal;
      sessionStorage.setItem("art4",article4);                           
              
  };
  let handleDecrement4 = () => { 
       
      if (count4 > 0) {       
        count4--;                                                      
        totalCount4.innerHTML = count4;
        prixTotal -= valeur4;
        totalCalcul.innerHTML = prixTotal;
      };
      if (count4 == 0 ) { 
        let article4 = document.getElementById("article4");
        main.removeChild(article4);
        sessionStorage.removeItem("art4");

        if(main.childElementCount == 0){
          panierVide();
        };
      };
  };

  incrementCount4.addEventListener("click", handleIncrement4);
  decrementCount4.addEventListener("click", handleDecrement4);
};
                                /*Produit 5 Dark Vador*/

const art5 = sessionStorage.getItem("art5");               
if(art5 != null){                                       
  let produitPrix5 = document.getElementById("pxProduit5").innerHTML; 
  let valeur5 = parseInt(produitPrix5);                               
  let decrementCount5 = document.getElementById("decrement-count5");      
  let incrementCount5 = document.getElementById("increment-count5");    
  const totalCount5 = document.getElementById("total-count5");           
  let article5 = document.getElementById("article5").innerHTML;       

  let count5 = sessionStorage.getItem("count5");                                                        
  totalCount5.innerHTML = count5;


  let handleIncrement5 = () => {   
                                                            
      count5++;                                                         
      totalCount5.innerHTML = count5; 
      prixTotal += valeur5;
      totalCalcul.innerHTML = prixTotal;
      sessionStorage.setItem("art5",article5);                           
              
  };
  let handleDecrement5 = () => { 
       
      if (count5 > 0) {       
        count5--;                                                      
        totalCount5.innerHTML = count5;
        prixTotal -= valeur5;
        totalCalcul.innerHTML = prixTotal;
      };
      if (count5 == 0 ) { 
        let article5 = document.getElementById("article5");
        main.removeChild(article5);
        sessionStorage.removeItem("art5");

        if(main.childElementCount == 0){
          panierVide();
        };
      };
  };

  incrementCount5.addEventListener("click", handleIncrement5);
  decrementCount5.addEventListener("click", handleDecrement5);

};

                                    /*Produit 6 Yoda*/

const art6 = sessionStorage.getItem("art6");            
if(art6 != null){                                                 
  let produitPrix6 = document.getElementById("pxProduit6").innerHTML; 
  let valeur6 = parseInt(produitPrix6);                               
  let decrementCount6 = document.getElementById("decrement-count6");      
  let incrementCount6 = document.getElementById("increment-count6");    
  const totalCount6 = document.getElementById("total-count6");           
  let article6 = document.getElementById("article6").innerHTML;       

  let count6 = sessionStorage.getItem("count6");                                                        
  totalCount6.innerHTML = count6;


  let handleIncrement6 = () => {   
                                                            
      count6++;                                                         
      totalCount6.innerHTML = count6; 
      prixTotal += valeur6;
      totalCalcul.innerHTML = prixTotal;
      sessionStorage.setItem("art6",article6);                           
              
  };
  let handleDecrement6 = () => { 
       
      if (count6 > 0) {       
        count6--;                                                      
        totalCount6.innerHTML = count6;
        prixTotal -= valeur6;
        totalCalcul.innerHTML = prixTotal;
      };
      if (count6 == 0 ) { 
        let article6 = document.getElementById("article6");
        main.removeChild(article6);
        sessionStorage.removeItem("art6");

        if(main.childElementCount == 0){
          panierVide();
        };
      };
  };

  incrementCount6.addEventListener("click", handleIncrement6);
  decrementCount6.addEventListener("click", handleDecrement6);

}


removeElementsByClass("textDate");

const deleteProducts = document.getElementById("emptyBasket");

deleteProducts.addEventListener('click', function(e){
  e.preventDefault();
  panierVide();
});

            /*Récupération du compteur d' articles pour le panier*/



addArt();










