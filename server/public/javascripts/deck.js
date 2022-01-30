//@ts-check

const types = ["cool", "hug", "laugh"];
const colors = ["yellow", "blue", "red"];
const numbers = [1, 2, 3];
const shadows = ["left", "right", "none"];

export function createDeck() {
  let deck = [];
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      for (let k = 0; k < numbers.length; k++) {
        for (let l = 0; l < shadows.length; l++) {
          let card = {
            type: types[i],
            color: colors[j],
            number: numbers[k],
            shadow: shadows[l],
            imagePath: `${types[i]}-${colors[j]}-${numbers[k]}-${shadows[l]}.jpg`,
          };
          deck.push(card);
        }
      }
    }
  }
  for (let m = 0; m < deck.length; m++) {
    deck[m].id = m.toString();
  }
  return deck;
}
export let deck = createDeck();

export const getScore = (set) => {
  let score = {
    number: { 1: 1, 2: 2, 3: 3 },
    type: { cool: 10, laugh: 20, hug: 30 },
    color: { red: 100, yellow: 200, blue: 300 },
    shadow: { none: 1000, left: 2000, right: 3000 },
  };
  // let totalScore = 0;
  return set.map((card) => {
    let cardScore = 0;
    for (let feature in score) {
      cardScore += score[feature][card[feature]];
    }
    card.score = cardScore;
    return card;
  });
};
deck = getScore(deck);
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
