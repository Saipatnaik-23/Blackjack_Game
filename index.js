// let firstCard = getRandomCard();
// let secondcard = getRandomCard();
let cards=[]
let sum=0;
let hasBlackJack = false;//boolean
let isAlive = false;
let message = " ";
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum");
let cardEl=document.querySelector(".cards");
let startBtn=document.querySelector(".startBtn");

let player= {
      name:"Priya ",
      chips:145
}


let playerEl=document.querySelector(".player-el");
playerEl.textContent= player.name+": "+player.chips +" /-";

function getRandomCard()
{
  let cardValue=Math.floor(Math.random()*13)+1
     if (cardValue==1)
     {
        return 11;
     }
     else if(cardValue==11 || cardValue==12 || cardValue==13)
     {
        return 10;
     }
      else
      {
        return cardValue;
      };
}



function startGame()
{ 
    isAlive=true;
    let firstCard=getRandomCard();
    let secondcard=getRandomCard();
    cards=[firstCard,secondcard];
    sum = firstCard + secondcard;
    renderGame();
}

function renderGame() {
    // sum = firstCard + secondcard;
   
    cardEl.textContent ="Cards :";
    for (let i=0; i<cards.length;i++)
    {
        cardEl.textContent+= cards[i]+" ";
    }

    sumEl.textContent="Sum : "+ sum;


    if (sum <= 20) {
        message = "Do you want to draw new Card ?";
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }
    else if (sum > 21) {
        message = "You're out of game! Start Again";
        isAlive = false;
    }
    // console.log(hasBlackJack);
    // console.log(isAlive);
    messageEl.textContent = message;
}



function newCard()
{
    if(isAlive ===true && hasBlackJack===false)//hence it give newcard incase of sum<21
    {
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
    }
}