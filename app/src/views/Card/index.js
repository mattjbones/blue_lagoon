import m from "mithril";
import "./style.css";

class Card {
  view(vnode) {
    const { card } = vnode.attrs;
    return m(".flip-container", m(".flipper", [m(Front), m(Back)]));
  }
}

class Front {
  view(vnode) {
    return m(".front", "Front");
  }
}

class Back {
  view(vnode) {
    return m(".back", "Back");
  }
}

export default Card;
