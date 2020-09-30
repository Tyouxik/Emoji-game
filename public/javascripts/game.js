//Helper functions

//Find the possible combos of three different arrays
const allDiffCombo = (arr1, arr2, arr3) => {
  let allCombo = [];
  //console.log(arr1)
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        allCombo.push([arr1[i], arr2[j], arr3[k]]);
      }
    }
  }
  return allCombo;
};

//Find the possible combos of one array
const allCombo = (cards) => {
  let results = [];
  if (cards.length === 0) {
    return null;
  }
  for (let i = 0; i < cards.length - 1; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = i + 2; k < cards.length; k++) {
        results.push([cards[i], cards[j], cards[k]]);
      }
    }
  }
  return results;
};
//Check the sets based on scores

//Generate all the scores for good sets
function goodSetScores() {
  let numberScore = [3, 6, 9];
  let typeScore = [30, 60, 90];
  let colorScore = [300, 600, 900];
  let shadowScore = [3000, 6000, 9000];
  let goodScores = [];
  for (let number of numberScore) {
    for (let type of typeScore) {
      for (let color of colorScore) {
        for (let shadow of shadowScore) {
          goodScores.push(number + type + color + shadow);
        }
      }
    }
  }
  return goodScores;
}
const goodScores = goodSetScores();

//Calculate score for an array of 3 cards
let score = {
  number: { 1: 1, 2: 2, 3: 3 },
  type: { cool: 10, laugh: 20, hug: 30 },
  color: { red: 100, yellow: 200, blue: 300 },
  shadow: { none: 1000, left: 2000, right: 3000 },
};
const getScore = (set) => {
  let totalScore = 0;
  set.forEach((card) => {
    for (let feature in score) {
      totalScore += score[feature][card[feature]];
    }
  });
  return totalScore;
};

//Check if 3 cards are a set
const checkIfSet = (set) => goodScores.includes(getScore(set));

const checkIfSetInBoard = (set) => {
  let yellowCards = set.filter((card) => card.color === "yellow");
  let redCards = set.filter((card) => card.color === "red");
  let blueCards = set.filter((card) => card.color === "blue");
  let goodSet = [];
  // Find all same color sets
  allCombo(yellowCards).forEach((set) => {
    if (checkIfSet(set)) {
      goodSet.push(set);
    }
  });
  allCombo(redCards).forEach((set) => {
    if (checkIfSet(set)) {
      goodSet.push(set);
    }
  });
  allCombo(blueCards).forEach((set) => {
    if (checkIfSet(set)) {
      goodSet.push(set);
    }
  });
  const allDiffColor = allDiffCombo(yellowCards, redCards, blueCards);
  allDiffColor.forEach((set) => {
    if (checkIfSet(set)) {
      goodSet.push(set);
    }
  });
  return goodSet;
};

// Shuffle cards

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
function removeCard(deck, num) {
  return deck.slice(0, deck.length - num);
}
function addCard(deck, num, boardCardsState) {
  let addedCards = deck.slice(deck.length - num);
  return [...(boardCardsState || []), ...addedCards];
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
  checkIfSet,
  changeSelectedCards,
  addSet,
  removeSet,
  goodScores,
  getScore,
  checkIfSetInBoard,
};

// all possible combinations
// let zeroCards= [];

// let cards = ["card1", "card2","card3", "card4","card5","card6", "card7","card8","card9","card10","card11","card12"]

// allCombinations(cards)
