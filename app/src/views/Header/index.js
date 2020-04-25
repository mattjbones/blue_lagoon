import m from "mithril";
import styler from "mithril-j2c";

class Header {
  view() {
    return m(`header`, m(`h1.${style.title}`, "Blue Lagoon"));
  }
}

const style = styler.attach({
  ".title": {
    text_align: "center",
    color: "blue",
  },
});

export default Header;
