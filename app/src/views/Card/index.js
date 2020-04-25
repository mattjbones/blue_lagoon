import m from "mithril";
import styler from "mithril-j2c";

class GameView {
  view(vnode) {
    const { card } = vnode.attrs;
    return m(`.${styles.root} .${styles.spacer}`, card.title);
  }
}

const styles = styler.attach({
  ".root": {
    display: "flex",
    width: "150px",
    height: "200px",
    background_color: "#008ECC",
    align_items: "center",
    justify_content: "center",
    position: "relative",
    border_radius: "5px",
    box_shadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease-in-out",
  },
  ".root:after": {
    position: "absolute",
    z_index: -1,
    width: "100%",
    height: "100%",
    opacity: 0,
    border_radius: "5px",
    box_shadow: "0 5px 15px rgba(0,0,0,0.3)",
    transition: "opacity 0.3s ease-in-out",
  },
  ".root:hover": {
    transform: "scale(1.1, 1.1)",
  },
  ".root:hover::after": {
    opacity: 1,
  },
  ".spacer": {
    margin: "8px",
  },
});

export default GameView;
