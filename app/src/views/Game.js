import m from 'mithril';
import GameModel from '../models/Game';

class GameView {
    view() {
        return m('.game', m('h2', `Starting Game of ${GameModel.size}`));
    } 
}

export default GameView;