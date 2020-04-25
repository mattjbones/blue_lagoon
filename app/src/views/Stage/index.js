import m from "mithril";
import Card from "../Card";
import styler from "mithril-j2c";

class Stage {
  view(vnode) {
    const { cards } = vnode.attrs;
    return m(`.${styles.root}`, [...cards.map((card) => m(Card, { card }))]);
  }
}

const styles = styler.attach({
  ".root": {
    display: "flex",
  },
});

export default Stage;
