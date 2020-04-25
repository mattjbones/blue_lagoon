// Load this from external config
// obfuscate the ids or store on sever
Array.prototype.shuffled = function () {
  return this.map((n) => [Math.random(), n])
    .sort()
    .map((n) => n[1]);
};

const pairs = [
  "blue-lagoon",
  "green-ravine",
  "aquamarine-sardine",
  "red-dreads",
  "yellow-jello",
  "teal-seal",
  "white-knight",
];

const generateCardData = (string, pair) => ({
  title: string.charAt(0).toUpperCase() + string.slice(1),
  id: string,
  pair,
});

const cards = pairs
  .map((pair) => {
    const parts = pair.split("-");
    return [generateCardData(parts[0], pair), generateCardData(parts[1], pair)];
  })
  .flat();

const compareCards = (card1, card2) => card1.pair === card2.pair;
export default {
  compareCards,
  cards,
  size: cards.length / 2,
};
