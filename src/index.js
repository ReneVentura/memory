
import "./style.css";
import aguila from "./imgs/aguila.png";
import leon from "./imgs/leon.png";
import ardilla from "./imgs/ardilla.jpg";
import lobo from "./imgs/lobo.jpg";
import oso from "./imgs/oso.jpg";
import tigre from "./imgs/tigre.png";
import venado from "./imgs/venado.jpg";
import zorro from "./imgs/zorro.jpg";
import backface from "./imgs/backface.png";


const t1= document.getElementById("aguila1");
const t2= document.getElementById("leon1");
const t3= document.getElementById("lobo1");
const t4= document.getElementById("ardilla1");
const t5= document.getElementById("oso1");
const t6= document.getElementById("tigre1");
const t7= document.getElementById("venado1");
const t8= document.getElementById("zorro1");

const t21= document.getElementById("aguila2");
const t22= document.getElementById("leon2");
const t23= document.getElementById("lobo2");
const t24= document.getElementById("ardilla2");
const t25= document.getElementById("oso2");
const t26= document.getElementById("tigre2");
const t27= document.getElementById("venado2");
const t28= document.getElementById("zorro2");
const t11= document.getElementById("backface1");
const t12= document.getElementById("backface2");
const t13= document.getElementById("backface3");
const t14= document.getElementById("backface4");
const t15= document.getElementById("backface5");
const t16= document.getElementById("backface6");
const t17= document.getElementById("backface7");
const t18= document.getElementById("backface8");
const t111= document.getElementById("backface11");
const t112= document.getElementById("backface12");
const t113= document.getElementById("backface13");
const t114= document.getElementById("backface14");
const t115= document.getElementById("backface15");
const t116= document.getElementById("backface16");
const t117= document.getElementById("backface17");
const t118= document.getElementById("backface18");


t1.src=aguila;

t2.src=leon;

t3.src=lobo;

t4.src=ardilla;

t5.src=oso;

t6.src=tigre;

t7.src=venado;

t8.src=zorro;

t21.src=aguila;

t22.src=leon;

t23.src=lobo;

t24.src=ardilla;

t25.src=oso;

t26.src=tigre;

t27.src=venado;

t28.src=zorro;

t11.src=backface;
t12.src=backface;
t13.src=backface;
t14.src=backface;
t15.src=backface;
t16.src=backface;
t17.src=backface;
t18.src=backface;
t111.src=backface;
t112.src=backface;
t113.src=backface;
t114.src=backface;
t115.src=backface;
t116.src=backface;
t117.src=backface;
t118.src=backface;






const cards = document.querySelectorAll('.memory-card');
let flippedCard= false;
let card1, card2;
let lock=false;
let ganador=0;


let clicks= document.getElementById("clicks");

let contador=0;
function flipCard(){
    
    
       
    if(lock) return;
    

    this.classList.toggle('flip');
    
    if(!flippedCard){
        flippedCard=true;
        card1=this;
    }
    else{
        flippedCard=false;
        card2=this;

        if(card1.dataset.framework === 
            card2.dataset.framework){
                ganador+=1;
                console.log(ganador);
                contador+=1;
                clicks.innerText="Clicks: "+contador.toString();
                card1.removeEventListener('click',flipCard);
                card2.removeEventListener('click',flipCard);
                
            }
            else{
                contador+=1;
                clicks.innerText="Clicks: "+contador.toString();
                lock=true;
                setTimeout(()=>{
                    card1.classList.remove('flip');
                    card2.classList.remove('flip');
                    lock=false;

                },1500)
                
            }
    }

    if(ganador== 8){
        window.alert("ganaste");
        location.reload();
    }
}

(function shuffle(){

    cards.forEach(card=>{
        let random= Math.floor(Math.random()*16);
        card.style.order=random;

    });
  

})();






cards.forEach(card=> card.addEventListener('click', flipCard));