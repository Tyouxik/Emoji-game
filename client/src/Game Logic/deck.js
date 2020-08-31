const types = ["cool", "hug", "laugh"];
const colors = ["yellow", "blue", "red"];
const numbers = [1, 2, 3];
const shadows = ["left", "right", "none"];

function getDeck() {
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
            image: `${types[i]}-${colors[j]}-${numbers[k]}-${shadows[l]}.jpg`,
          };
          deck.push(card);
        }
      }
    }
  }
  return deck;
}

export const Deck = getDeck();
