import m from "mithril";
import GameModel from "../../models/Game";
import Stage from "../Stage";

class GameView {
  constructor(initialVnode) {
    const { cards } = GameModel;
    this.gameCards = cards.shuffled();
  }

  view() {
    return m("section", [
      m(
        "h2",
        `Starting with ${GameModel.size} pair${GameModel.size > 1 ? "s" : ""}`
      ),
      m(Stage, {
        cards: this.gameCards,
        compareCards: GameModel.compareCards,
        onResetGame: () => this._handleResetGame(),
      }),
    ]);
  }

  _handleResetGame() {
    this.gameCards = this.gameCards.shuffled();
  }
}

export default GameView;
