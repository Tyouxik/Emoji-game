//@ts-check

const types = ["cool", "hug", "rolling"];
const colors = ["yellow", "blue", "red"];
const numbers = [1, 2, 3];
const tilted = ["left", "right", "none"];

export const addScoreToCards = (set) => {
  let score = {
    number: { 1: 1, 2: 2, 3: 3 },
    type: { cool: 10, rolling: 20, hug: 30 },
    color: { red: 100, yellow: 200, blue: 300 },
    tilted: { none: 1000, left: 2000, right: 3000 },
  };
  return set.map((card) => {
    let cardScore = 0;
    for (let feature in score) {
      cardScore += score[feature][card[feature]];
    }
    card.score = cardScore;
    return card;
  });
};

export function createDeck() {
  let deck = [];
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      for (let k = 0; k < numbers.length; k++) {
        for (let l = 0; l < tilted.length; l++) {
          let card = {
            type: types[i],
            color: colors[j],
            number: numbers[k],
            tilted: tilted[l],
            imgName: `${types[i]}-${colors[j]}-${numbers[k]}-${tilted[l]}.jpg`,
          };
          deck.push(card);
        }
      }
    }
  }
  for (let m = 0; m < deck.length; m++) {
    deck[m].id = m.toString();
  }
  deck = addScoreToCards(deck);
  return deck;
}

// Shuffle cards

export function shuffleCards(cardArray) {
  for (let i = 0; i < 1400; i++) {
    let location1 = Math.floor(Math.random() * cardArray.length);
    let location2 = Math.floor(Math.random() * cardArray.length);
    let tmp = cardArray[location1];
    cardArray[location1] = cardArray[location2];
    cardArray[location2] = tmp;
  }
  return cardArray;
}
