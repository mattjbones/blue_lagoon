import m from "mithril";
import Card from "../Card";
import "./style.css";

class Stage {
  constructor(intialVnode) {
    this.selectedCards = [];
    this.flipped = new Set();
    this.isActiveGame = true;
    this.hasWon = false;
    console.log({ intialVnode });
  }

  view(vnode) {
    const { cards, onResetGame } = vnode.attrs;
    return m(".stage", [
      m(".card-container", [
        ...cards.map((card) =>
          m(Card, {
            card,
            onCardClick: () => this.isActiveGame && this._handleCardClick(card),
            isFlipped: this.flipped.has(card),
          })
        ),
      ]),
      this.hasWon
        ? [
            m("h2.winner", "Winner!!"),
            m(
              "p.again",
              { onclick: () => this._handleResetGame(onResetGame) },
              "Play again?"
            ),
          ]
        : undefined,
    ]);
  }

  onupdate(vnode) {
    this._checkForMatch(vnode);
  }

  _checkForMatch(vnode) {
    const { compareCards, cards } = vnode.attrs;
    if (this.selectedCards.length === 2) {
      const isMatch = compareCards(...this.selectedCards);
      if (isMatch) {
        //check if won
        const isWinner = this._checkIfWinner(cards);
        this.selectedCards = [];
        if (isWinner) {
          window.setTimeout(() => {
            m.redraw();
          }, 500);
        }
      } else {
        // delay before resetting the mis-match
        window.setTimeout(() => {
          this.selectedCards.map((card) => this.flipped.delete(card));
          this.selectedCards = [];
          m.redraw();
        }, 800);
      }
    }
  }

  _checkIfWinner(cards) {
    const cardCount = cards.length;
    const flippedCount = this.flipped.size;
    this.hasWon = cardCount === flippedCount;
    this.isActiveGame = !this.hasWon;
    return this.hasWon;
  }

  _handleCardClick(card) {
    if (this.flipped.has(card)) {
      this.flipped.delete(card);
      this.selectedCards = this.selectedCards.filter(
        (selectedCard) => selectedCard != card
      );
    } else {
      this.flipped.add(card);
      this.selectedCards.push(card);
    }
  }

  _handleResetGame(onResetGame) {
    onResetGame();
    this.flipped.clear();
    this.selectedCards = [];
    this.isActiveGame = true;
    this.hasWon = false;
  }
}

export default Stage;
