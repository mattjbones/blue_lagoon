import m from "mithril";
import "./style.css";

class Card {
  view(vnode) {
    const { card, isFlipped } = vnode.attrs;
    return m(
      `.flip-container ${isFlipped ? " .flip" : ""}`,
      { key: card.id, onclick: () => this._handleCardClick(vnode) },
      m(".flipper", [m(Front), m(Back, { card })])
    );
  }

  _handleCardClick(vnode) {
    const { onCardClick, card } = vnode.attrs;
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
