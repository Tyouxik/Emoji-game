// State for SoloGame
//     cards = getDeck2();
//     displayedCards = [];
//     selectedCards = [];
//     selectedIndex = [];
//     discartedCards = [];
//     foundSets = 0;
//     remainingTime;

// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     this.remainingTime = timer;
//     // console.log(this.remainingTime)
//     // console.log(this)
//     display.textContent = minutes + ":" + seconds;
//     // console.log(timer)
//     if (--timer < 0) {
//       timer = 0;
//       document.querySelector("body > main").classList.add("hidden");
//       document.querySelector("#game-over").classList.remove("hidden");
//       document.querySelector("#help").classList.add("hidden");
//     }
//   }, 1000);
// }

function shuffleCards(cards) {
  for (let i = 0; i < 1400; i++) {
    let location1 = Math.floor(Math.random() * cards.length);
    let location2 = Math.floor(Math.random() * cards.length);
    let tmp = cards[location1];
    cards[location1] = cards[location2];
    cards[location2] = tmp;
  }
  return cards;
}
// Pick cards from deck to board
function pickCard(deck, num) {
  return deck.slice(0, deck.length - num);
}
function addCard(deck, num, boardCardsState) {
  let addedCards = deck.slice(deck.length - num);
  return boardCardsState
    ? [...boardCardsState, ...addedCards]
    : deck.slice(deck.length - num);
}

//Select a card
function changeSelectedCards(id, selectedCardState, boardCardsState) {
  let clickedCard = boardCardsState.find((card) => card.id === id);
  let selectCards = selectedCardState.filter((card) => card.id !== id);
  console.log(selectedCardState.includes(clickedCard));
  console.log("clickedCard", clickedCard);
  if (
    selectedCardState.length < 3 &&
    !selectedCardState.includes(clickedCard)
  ) {
    return [...selectedCardState, clickedCard];
  } else if (selectedCardState.includes(clickedCard)) {
    return selectCards;
  } else {
    return selectedCardState;
  }
}

//if (selectedCards.length < 3 && !selectedCards.includes(selectedCard)) {
//     setSelectedCards([...selectedCards, selectedCard]);
//   }
//   //Unselect a card
//   else if (selectedCards.includes(selectedCard)) {
//     let newSelection = [...selectedCards];
//     newSelection.pop(selectedCard);
//     setSelectedCards(newSelection);
//   }

//Check if 3 cards are a set

function checkIfSet(array) {
  if (array.length === 0) {
    return false;
  }
  if (array.length === 3) {
    let checkAllSameType =
      array[0].type === array[1].type && array[1].type === array[2].type;
    let checkAllSameColor =
      array[0].color === array[1].color && array[1].color === array[2].color;
    let checkAllSameNumber =
      array[0].number === array[1].number &&
      array[1].number === array[2].number;
    let checkAllSameShadow =
      array[0].shadow === array[1].shadow &&
      array[1].shadow === array[2].shadow;
    let checkAllDiffType =
      array[0].type !== array[1].type &&
      array[1].type !== array[2].type &&
      array[0].type !== array[2].type;
    let checkAllDiffColor =
      array[0].color !== array[1].color &&
      array[1].color !== array[2].color &&
      array[0].color !== array[2].color;
    let checkAllDiffNumber =
      array[0].number !== array[1].number &&
      array[1].number !== array[2].number &&
      array[0].number !== array[2].number;
    let checkAllDiffShadow =
      array[0].shadow !== array[1].shadow &&
      array[1].shadow !== array[2].shadow &&
      array[0].shadow !== array[2].shadow;

    if (checkAllSameType || checkAllDiffType) {
      if (checkAllSameColor || checkAllDiffColor) {
        if (checkAllSameNumber || checkAllDiffNumber) {
          if (checkAllSameShadow || checkAllDiffShadow) {
            console.log("This is true");
            return true;
          }
        }
      }
    }
    console.log("This is false");
    return false;
  }
}
// function selectCard(event) {
//   const image = event.target;
//   const cardDiv = event.target.parentNode;
//   const cardIndex = event.target.parentNode.id;
//   console.log(event);
//   console.log(this.selectedCards, "here");

//   if (cardDiv.classList.contains("selected")) {
//     cardDiv.classList.remove("selected");
//     this.selectedCards.pop(this.displayedCards[cardIndex]);
//   } else if (
//     !cardDiv.classList.contains("selected") &&
//     this.selectedCards.length < 3
//   ) {
//     cardDiv.classList.add("selected");
//     this.selectedCards.push(this.displayedCards[cardIndex]);
//   }
// }

// function renderCards() {
//   // create constants for all query
//   // add eventListener to new append cards
//   const setBoard1 = document.querySelector("#set-board-1");
//   const setBoard2 = document.querySelector("#set-board-2");
//   const setBoard3 = document.querySelector("#set-board-3");
//   setBoard1.innerHTML = "";
//   setBoard2.innerHTML = "";
//   setBoard3.innerHTML = "";

//   for (let i = 0; i < this.displayedCards.length; i++) {
//     let card = document.createElement("div");
//     let image = `<img class='emoji' src="images/${this.displayedCards[i].image}" alt="${this.displayedCards[i].image}">`;
//     card.innerHTML = image;
//     card.classList.add("card");
//     card.setAttribute("id", i);
//     if (i < 4) {
//       setBoard1.appendChild(card);
//     } else if (i < 8) {
//       setBoard2.appendChild(card);
//     } else if (i < 12) {
//       setBoard3.appendChild(card);
//     }
//   }
// }

// function isASet() {
//   // console.log('This is a set')
//   // Add 1 to found set counter
//   this.foundSets++;
//   document.querySelector("#sets-found").innerHTML = this.foundSets;
//   //Remove selected cards
//   const selectedCardElements = document.querySelectorAll(".selected");

//   for (let i = 0; i < 3; i++) {
//     let cardIndex = selectedCardElements[i].getAttribute("id");
//     this.displayedCards.splice(cardIndex, 1, this.nextCard());
//     // console.log(this.displayedCards)
//     console.log(this.selectedCards);
//   }
//   this.selectedCards = [];
//   console.log("This is a set");
// }

// function isNotASet() {
//   const selectedCard = document.querySelectorAll(".selected");
//   selectedCards = [];
//   for (let i = 0; i < selectedCard.length; i++) {
//     selectedCard[i].classList.remove("selected");
//   }
// }
// function refresh() {
//   this.cards.unshift(...this.displayedCards.splice(0, 6));
//   this.pick(6);
//   this.renderCards();
//   addClickToCards();
//   console.log(this.cards);
//   console.log(this.displayedCards);
// }

export { shuffleCards, pickCard, addCard, checkIfSet, changeSelectedCards };

// all possible combinations
// let zeroCards= [];

// let cards = ["card1", "card2","card3", "card4","card5","card6", "card7","card8","card9","card10","card11","card12"]

// const allCombinations = (cards)=>{
//   let results = [];
//   if(cards.length === 0) {return null};
//   for (let i = 0; i < cards.length - 1; i++) {
//     for (let j = i + 1; j < cards.length; j++) {
//       for(let k=i+2;k<cards.length;k++){
//         results.push([cards[i] ,cards[j], cards[k]]);
//     }
//   }
// }
//   return results
// }
// allCombinations(cards)
