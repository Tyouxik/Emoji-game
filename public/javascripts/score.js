//Test sample
let sampleGoodSet = [
  {
    type: "cool",
    color: "yellow",
    number: 1,
    shadow: "left",
    imagePath: "cool-yellow-1-left.jpg",
    score: 2211,
  },
  {
    type: "cool",
    color: "yellow",
    number: 1,
    shadow: "right",
    imagePath: "cool-yellow-1-right.jpg",
    score: 3211,
  },
  {
    type: "cool",
    color: "yellow",
    number: 1,
    shadow: "none",
    imagePath: "cool-yellow-1-none.jpg",
    score: 1211,
  },
];

let sampleBadSet = [
  {
    type: "cool",
    color: "yellow",
    number: 1,
    shadow: "left",
    imagePath: "cool-yellow-1-left.jpg",
    score: 2211,
  },
  {
    type: "cool",
    color: "yellow",
    number: 1,
    shadow: "right",
    imagePath: "cool-yellow-1-right.jpg",
    score: 3211,
  },
  {
    type: "laugh",
    color: "yellow",
    number: 1,
    shadow: "none",
    imagePath: "cool-yellow-1-none.jpg",
    score: 1221,
  },
];

//Score logic
let cardScore = {
  number: { 1: 1, 2: 2, 3: 3 },
  type: { cool: 10, laugh: 20, hug: 30 },
  color: { red: 100, yellow: 200, blue: 300 },
  shadow: { none: 1000, left: 2000, right: 3000 },
};

let numberScore = [3, 6, 9];
let typeScore = [30, 60, 90];
let colorScore = [300, 600, 900];
let shadowScore = [3000, 6000, 9000];

//Generate all the scores for good sets
function goodSetScores() {
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

const getSetScore = (set) => {
  let setScore = 0;
  set.forEach((card) => {
    setScore += card.score;
  });
  return setScore;
};

//Check if 3 cards are a set
const checkIfSet = (cardArr) => goodScores.includes(getSetScore(cardArr));

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

//Check if 3 cards are a set
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

module.exports = { getSetScore, checkIfSet, checkIfSetInBoard };
