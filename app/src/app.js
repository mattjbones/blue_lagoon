import m from "mithril";
import Game from "./views/Game";
import Header from "./views/Header";
import "./app.css";

class App {
  view() {
    return m("main", [m(Header), m(Game)]);
  }
}

export default App;
