import m from "mithril";
import "./style.css";

class Card {
  constructor() {
    this.isFlipped = false;
  }

  view(vnode) {
    const { card } = vnode.attrs;
    const { isFlipped } = this;
    return m(
      `.flip-container ${isFlipped ? " .flip" : ""}`,
      { onclick: () => this._handleCardClick(vnode) },
      m(".flipper", [m(Front), m(Back, { card })])
    );
  }

  _handleCardClick(vnode) {
    const { onCardClick, card } = vnode.attrs;
    this.isFlipped = !this.isFlipped;
    onCardClick(card);
  }
}

class Front {
  view(vnode) {
    return m(".front", m("p.front-logo"));
  }
}

class Back {
  view(vnode) {
    const { title } = vnode.attrs.card;
    return m(".back", `${title}`);
  }
}

export default Card;
