import m from "mithril";
import Game from './views/Game';

m.render(
    document.body, 
    m('main', [
        m('h1', 'Blue Lagoon'),
        m(Game)
    ])
);
