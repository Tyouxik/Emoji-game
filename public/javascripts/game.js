// Shuffle cards

function shuffleCards(cardArray) {
  for (let i = 0; i < 1400; i++) {
    let location1 = Math.floor(Math.random() * cardArray.length);
    let location2 = Math.floor(Math.random() * cardArray.length);
    let tmp = cardArray[location1];
    cardArray[location1] = cardArray[location2];
    cardArray[location2] = tmp;
  }
  return cardArray;
}

// Pick cards from deck to board
function removeCard(deck, num) {
  return deck.slice(0, deck.length - num);
}
function addCard(deck, num, boardCards) {
  let addedCards = deck.slice(deck.length - num);
  return [...(boardCards || []), ...addedCards];
}

//Select a card
function changeSelectedCards(id, selectedCardState, boardCardsState) {
  let clickedCard = boardCardsState.find((card) => card.id === id);
  let selectCards = selectedCardState.filter((card) => card.id !== id);
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
// Happens when a set is found
function addSet(originArray, destinationArray) {
  return [...destinationArray, originArray];
}
function removeSet(selectedCards, boardCards) {
  let selectedCardsId = selectedCards.map((card) => card.id);
  return boardCards.filter((card) => {
    return !selectedCardsId.includes(card.id);
  });
}

//Find a set on the board

export {
  shuffleCards,
  removeCard,
  addCard,
  changeSelectedCards,
  addSet,
  removeSet,
};
