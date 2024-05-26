// let firstCard=getRandomCard()
// let secondCard=getRandomCard()
// let cards=[firstCard,secondCard]
let cards=[]
// let sum=firstCard+secondCard
let sum=0
let hasBlackjack=false
let isAlive=true
let message=""
let messageEl=document.getElementById("message-el")
// console.log(messageEl)
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el") //if we use id then take # and if we use class then .
let cardsEl=document.querySelector("#cards-el")

let player={
    name:"Per",
    Chips:145
}
// let playerName="Per"
// let playerChips=145


let playerEl=document.getElementById('player-el')
playerEl.textContent=player.name + " : $"+player.Chips

function getRandomCard(){
     let randomNumber= Math.floor(Math.random()*13) + 1
    if(randomNumber>10){
         return 10
    }else  if(randomNumber===11)
    {
        return 1
    }else{
        return randomNumber
    }
}
function startGame() {
    renderGame()
    isAlive=true
    let firstCard=getRandomCard()
let secondCard=getRandomCard()
let cards=[firstCard,secondCard]

}

function renderGame(){
    cardsEl.textContent="Cards: " 
    for(let i =0; i<cards.length; i++)
        {
            cardsEl.textContent+=cards[i]+ " "
            // console.log(cards[i])
        }
    sumEl.textContent="Sum :  " + sum
if(sum<21)
    {
        // console.log("Do you want to draw new card")
        message="Do you want to draw new card"
    }else if(sum===21)
        {
            // console.log("wohoo! You got blackjack")
            hasBlackjack=true
            // console.log(hasBlackjack)
            message="wohoo! You got blackjack"

        }else{
            // console.log("You are out of the game !!")
            isAlive=false
            // console.log(isAlive)
            message="You are out of the game !!"

        }
        messageEl.textContent=message
    }
    function newCard(){
        if(isAlive===true && hasBlackjack===false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
        }

    }