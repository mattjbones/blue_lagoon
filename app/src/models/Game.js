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

export default {
  cards,
  size: cards.length / 2,
};
