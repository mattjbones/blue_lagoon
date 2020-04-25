// Load this from external config
// obfuscate the ids or store on sever
const cards = [
  {
    title: "Blue",
    id: "blue",
    pair: "lagoon",
  },
  {
    title: "Lagoon",
    id: "lagoon",
    pair: "blue",
  },
];

const compareCards = (card1, card2) => card1.pair !== card2.id;

export default {
  compareCards,
  cards,
  size: cards.length / 2,
};
