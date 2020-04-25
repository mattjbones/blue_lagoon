import m from "mithril";
import Card from "../Card";

class Stage {
  view(vnode) {
    const { cards } = vnode.attrs;
    // return m(`.${styles.root}`, [...cards.map((card) => m(Card, { card }))]);
    return m(".stage", m(Card, { card: cards[0] }));
  }
}

export default Stage;
