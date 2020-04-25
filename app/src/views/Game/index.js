import m from 'mithril';
import GameModel from '../../models/Game';
import Stage from '../Stage';
import styler from 'mithril-j2c';

class GameView {
    view() {
        return m(`section.${styles.game}`, 
        [
            m('h2', `Starting Game of ${GameModel.size}`),
            m(Stage, {size: GameModel.size})    
        ]);
    } 
}

const styles = styler.attach({
    '.game': {
        text_align: 'left'
    }
});

export default GameView;