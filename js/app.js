let card = ["../img/king.png",
"../img/queen.png",
"../img/joker.png",
"../img/1.png",
"../img/2.png",
"../img/3.png",
"../img/king.png",
"../img/queen.png",
"../img/joker.png",
"../img/1.png",
"../img/2.png",
"../img/3.png"];

let newCard = ["../img/kingheart.png",
"../img/queenheart.png",
"../img/jackheart.png",
"../img/heart1.png",
"../img/heart2.png",
"../img/heart3.png",
"../img/kingheart.png",
"../img/queenheart.png",
"../img/jackheart.png",
"../img/heart1.png",
"../img/heart2.png",
"../img/heart3.png"];

let randomCardList = [];
// let newCardList = [];

var i = 0;
var count = 0;
var loop;
let random = () => {

    while (i < 12) {
        var r = Math.floor(Math.random() * card.length);
        if (checkTwice(card[r])) {
            random();
        } else {
            randomCardList.push(card[r]);
            i++;
        }
    }

}

let newRandom = () =>{
    
    while( i  < 12){
        var nR = Math.floor(Math.random() * newCard.length);
        if(checkTwice(newCard[nR])){
            newRandom();
        }else{
            randomCardList.push(newCard[nR]);
            i++;
        }
    }
}


let checkTwice = (value) => {
    var count = 0;
    for (let index = 0; index < randomCardList.length; index++) {
        if (randomCardList[index] == value) {
            // console.log(randomCardList);
            count++;
        }
    }

    if (count == 2) {
        return true;
    } else {
        return false;
    }
}


function initialload() {
    if(count == 0){
    random();
    alert(sec);
    for (let index = 0; index < randomCardList.length; index++) {
        document.getElementsByClassName('card')[index].classList.remove('reverse');
        document.getElementsByClassName("card")[index].classList.add('change');
        document.getElementsByClassName("image1")[index].src =randomCardList[index];
    
    }
}   
}

function shuffle(){
    if(count == 60){  
    newRandom();
    // alert(sec);
    for (let index = 0; index < randomCardList.length; index++) {
        // document.getElementsByClassName('card')[index].classList.remove('reverse');
        document.getElementsByClassName("card")[index].classList.add('change');
        document.getElementsByClassName("card")[index].style.display = "flex";
        document.getElementsByClassName("image1")[index].src =randomCardList[index];
    
    }

    // setTimeout(()=>{
    //     clearInterval(loop);
        // document.getElementById('timing').innerHTML  = "0s";
    //     time.classList.remove('alert');
    
    //     gameEnd();
                
            
    // },sec * second);
        randomCardList = [];
}
}


var firstClick = "";
var secondClick = "";
var   clickID = [];
function flip(obj){

   
    if(firstClick == ""){
        firstClick = document.getElementsByTagName('img')[obj.id-1].src;
        clickID[0] = obj.id;
        
    }else{
        secondClick = document.getElementsByTagName('img')[obj.id-1].src;
        clickID[1] = obj.id;
        check();
        firstClick = "";
        secondClick = "";
    }
    
   }

    

        
function check(){
    // var count = 0;
    if(firstClick == secondClick  && clickID[0] != clickID[1]){
        document.getElementById(clickID[0]).style.display = "none";
        document.getElementById(clickID[1]).style.display = "none";
        count += 10;
    }   
    document.getElementById('mark').innerHTML = `${count}`;
    win();
   
} 
        
const time = document.getElementById('timing');

let second = 1000;
let sec = 20;
function alert(sec){ 
    var count = 20; 
    
    loop = setInterval(() =>{
        document.getElementById('timing').innerHTML = `${--count}s`;
        if(count <= 10){
         
         time.classList.add('alert');
        }
},second);

  
setTimeout(()=>{
    clearInterval(loop);
    document.getElementById('timing').innerHTML  = "0s";
    time.classList.remove('alert');
    gameEnd();       
        
},sec * second);

}
    

function gameEnd(){
    for (let index = 0; index < randomCardList.length; index++) {
        document.getElementsByClassName("card")[index].classList.remove('change');
        document.getElementsByClassName("card")[index].classList.add('reverse');
        document.getElementsByClassName("card")[index].style.display = "flex";
        document.getElementsByClassName("image1")[index].src =  "../img/back.png";
      
      
        
      
    }
    
    count = 0;
  

   
    // randomCardList = [];
    // console.log(randomCardList);
    
}

function win(){
    if(count == 60){
        i = 0;
        randomCardList = [];
        count = 0;
        // document.getElementById('end').display = "flex";
        // document.getElementById('end').innerHTML = " Congrulation You Win!!";
    }
}