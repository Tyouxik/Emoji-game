//Generate passcode for newGame
function generatePasscode() {
  var length = 5,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
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
module.exports = {
  generatePasscode,
  removeCard,
  addCard,
};

// {
//   generatePasscode,
//   removeCard,
//   addCard,
//   changeSelectedCards,
//   addSet,
//   removeSet,
// };
