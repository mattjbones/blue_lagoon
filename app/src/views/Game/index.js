import m from "mithril";
import GameModel from "../../models/Game";
import Stage from "../Stage";
import styler from "mithril-j2c";

class GameView {
  view() {
    return m(`section.${styles.game}`, [
      m(
        "h2",
        `Starting with ${GameModel.size} pair${GameModel.size > 1 ? "s" : ""}`
      ),
      m(Stage, { cards: GameModel.cards }),
    ]);
  }
}

const styles = styler.attach({
  ".game": {
    text_align: "left",
  },
});

export default GameView;
