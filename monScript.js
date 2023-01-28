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


                /*Les plus et les moins incrémentés*/


                /*les valeurs des produits*/



                                                                    
window.onload = ()=> {        
        sessionStorage.clear();                                   
    }
                                                    /*Produit 1 Obiwan*/

let produitPrix1 = document.getElementById("pxProduit"+1).innerHTML; 
let valeur1 = parseInt(produitPrix1);                               
let decrementCount1 = document.getElementById("decrement-count"+ 1);      
let incrementCount1 = document.getElementById("increment-count"+ 1);    
let totalCount1 = document.getElementById("total-count"+ 1);           
let article1 = document.getElementById("article"+ 1).innerHTML;       

let count1 = 0;                                                        
totalCount1.innerHTML = count1;


let handleIncrement1 = () => {                                                           
    count1++;                                                         
    totalCount1.innerHTML = count1; 
    sessionStorage.setItem("art1",article1);                           
            
};
let handleDecrement1 = () => {  
    if (count1 > 0) {                                                  
        count1--;                                                      
        totalCount1.innerHTML = count1;
    }
    console.log(count1)
    if (count1 == 0 ) {        
        sessionStorage.removeItem("art1");
    }
};

incrementCount1.addEventListener("click", handleIncrement1);
decrementCount1.addEventListener("click", handleDecrement1);

                                            /*Produit 2 Chewbacca*/
                                                    
let produitPrix2 = document.getElementById("pxProduit"+2).innerHTML; 
let valeur2 = parseInt(produitPrix2);                               
let decrementCount2 = document.getElementById("decrement-count"+ 2);      
let incrementCount2 = document.getElementById("increment-count"+ 2);    
let totalCount2 = document.getElementById("total-count"+ 2);           
let article2 = document.getElementById("article"+ 2).innerHTML;       

let count2 = 0;                                                        
totalCount2.innerHTML = count2;


let handleIncrement2 = () => {                                                           
    count2++;                                                         
    totalCount2.innerHTML = count2; 
    sessionStorage.setItem("art2",article2);                           
            
};
let handleDecrement2 = () => {  
    if (count2 > 0) {                                                  
        count2--;                                                      
        totalCount2.innerHTML = count2;
    }
    console.log(count2)
    if (count2 == 0 ) {        
        sessionStorage.removeItem("art2");
    }
};

incrementCount2.addEventListener("click", handleIncrement2);
decrementCount2.addEventListener("click", handleDecrement2);


                                        /*Produit 3 Jar Jar*/
                                                    
let produitPrix3 = document.getElementById("pxProduit"+3).innerHTML; 
let valeur3 = parseInt(produitPrix3);                               
let decrementCount3 = document.getElementById("decrement-count"+ 3);      
let incrementCount3 = document.getElementById("increment-count"+ 3);    
let totalCount3 = document.getElementById("total-count"+ 3);           
let article3 = document.getElementById("article"+ 3).innerHTML;       

let count3 = 0;                                                        
totalCount3.innerHTML = count3;


let handleIncrement3 = () => {                                                           
    count3++;                                                         
    totalCount3.innerHTML = count3; 
    sessionStorage.setItem("art3",article3);                           
            
};
let handleDecrement3 = () => {  
    if (count3 > 0) {                                                  
        count3--;                                                      
        totalCount3.innerHTML = count3;
    }
    console.log(count3)
    if (count3 == 0 ) {        
        sessionStorage.removeItem("art3");
    }
};

incrementCount3.addEventListener("click", handleIncrement3);
decrementCount3.addEventListener("click", handleDecrement3);


                                        /*Produit 4 Stortrooper*/
                                                    
let produitPrix4 = document.getElementById("pxProduit"+4).innerHTML; 
let valeur4 = parseInt(produitPrix4);                               
let decrementCount4 = document.getElementById("decrement-count"+ 4);      
let incrementCount4 = document.getElementById("increment-count"+ 4);    
let totalCount4 = document.getElementById("total-count"+ 4);           
let article4 = document.getElementById("article"+ 4).innerHTML;       

let count4 = 0;                                                        
totalCount4.innerHTML = count4;


let handleIncrement4 = () => {                                                           
    count4++;                                                         
    totalCount4.innerHTML = count4; 
    sessionStorage.setItem("art4",article4);                           
            
};
let handleDecrement4 = () => {  
    if (count4 > 0) {                                                  
        count4--;                                                      
        totalCount4.innerHTML = count4;
    }
    console.log(count4)
    if (count4 == 0 ) {        
        sessionStorage.removeItem("art4");
    }
};

incrementCount4.addEventListener("click", handleIncrement4);
decrementCount4.addEventListener("click", handleDecrement4);

                                /*Produit 5 Dark Vador*/
                                                    
let produitPrix5 = document.getElementById("pxProduit"+5).innerHTML; 
let valeur5 = parseInt(produitPrix5);                               
let decrementCount5 = document.getElementById("decrement-count"+ 5);      
let incrementCount5 = document.getElementById("increment-count"+ 5);    
let totalCount5 = document.getElementById("total-count"+ 5);           
let article5 = document.getElementById("article"+ 5).innerHTML;       

let count5 = 0;                                                        
totalCount5.innerHTML = count5;


let handleIncrement5 = () => {                                                           
    count5++;                                                         
    totalCount5.innerHTML = count5; 
    sessionStorage.setItem("art5",article5);                           
            
};
let handleDecrement5 = () => {  
    if (count5 > 0) {                                                  
        count5--;                                                      
        totalCount5.innerHTML = count5;
    }
    console.log(count5)
    if (count5 == 0 ) {        
        sessionStorage.removeItem("art5");
    }
};

incrementCount5.addEventListener("click", handleIncrement5);
decrementCount5.addEventListener("click", handleDecrement5);



                                    /*Produit 6 Yoda*/
                                                    
let produitPrix6 = document.getElementById("pxProduit"+6).innerHTML; 
let valeur6 = parseInt(produitPrix6);                               
let decrementCount6 = document.getElementById("decrement-count"+ 6);      
let incrementCount6 = document.getElementById("increment-count"+ 6);    
let totalCount6 = document.getElementById("total-count"+ 6);           
let article6 = document.getElementById("article"+ 6).innerHTML;       

let count6 = 0;                                                        
totalCount6.innerHTML = count6;


let handleIncrement6 = () => {                                                           
    count6++;                                                         
    totalCount6.innerHTML = count6; 
    sessionStorage.setItem("art6",article6);                           
            
};
let handleDecrement6 = () => {  
    if (count6 > 0) {                                                  
        count6--;                                                      
        totalCount6.innerHTML = count6;
    }
    console.log(count6)
    if (count6 == 0 ) {        
        sessionStorage.removeItem("art6");
    }
};

incrementCount6.addEventListener("click", handleIncrement6);
decrementCount6.addEventListener("click", handleDecrement6);


const totalCalcul = document.getElementById("totalPx");

const buttonTotalCalcul = document.getElementById("button-calcul");

let total = 0;
totalCalcul.innerHTML = total;
let calculation = () => {
  let totalProduct = ((count1 * valeur1) 
    + (count2 * valeur2)
    + (count3 * valeur3) 
    + (count4 * valeur4) 
    + (count5 * valeur5)
    + (count6) * (valeur6));

    total = totalProduct;
    totalCalcul.innerHTML = total;
    sessionStorage.setItem("total",total); 

}

buttonTotalCalcul.addEventListener("click", calculation);

                                    /*Nombre articles dans le panier*/

const nbArt = document.getElementById("nbArt");

let nbArticles = 0;
nbArt.innerHTML = nbArticles;
const addArt = () => {
    nbArticles = count1 + count2 + count3 + count4 + count5 + count6;
    nbArt.innerHTML = nbArticles;
}
const recupCount = ()=>{
        sessionStorage.setItem("count1", count1);
        sessionStorage.setItem("count2", count2);
        sessionStorage.setItem("count3", count3);
        sessionStorage.setItem("count4", count4);
        sessionStorage.setItem("count5", count5);
        sessionStorage.setItem("count6", count6);
}

buttonTotalCalcul.addEventListener("click",addArt);
buttonTotalCalcul.addEventListener("click",recupCount);


const panier = document.getElementById("panier");

/*const nbArt = document.getElementById("nbArt");


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
*/




