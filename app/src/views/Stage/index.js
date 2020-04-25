import m from "mithril";
import Card from "../Card";
import "./style.css";

class Stage {
  constructor(intialVnode) {
    this.compareCards = intialVnode.attrs.game.compareCards;
    this.targetCard = undefined;
  }

  view(vnode) {
    const { cards } = vnode.attrs.game;
    return m(".stage", [
      ...cards.map((card) =>
        m(Card, { card, onCardClick: () => this._handleCardClick(card) })
      ),
    ]);
  }

  _handleCardClick(card) {
    if (!this.targetCard) {
      this.targetCard = card;
    } else {
      if (this.compareCards(this.targetCard, card)) {
        console.log("score++");
      } else {
        console.log("Unlucky");
        this.targetCard.isFlipped = false;
        card.isFlipped = false;
        this.targetCard = undefined;
      }
    }
  }
}

export default Stage;
