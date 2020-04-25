import m from "mithril";
import GameModel from "../../models/Game";
import Stage from "../Stage";

class GameView {
  view() {
    return m(`section`, [
      m(
        "h2",
        `Starting with ${GameModel.size} pair${GameModel.size > 1 ? "s" : ""}`
      ),
      m(Stage, { cards: GameModel.cards }),
    ]);
  }
}

export default GameView;
