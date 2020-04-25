import m from "mithril";
import Game from './views/Game';
import Header from './views/Header';
import styler from 'mithril-j2c';

m.render(
    document.body, 
    m('main', [
        m(Header),
        m(Game),
        styler.view()
    ])
);
