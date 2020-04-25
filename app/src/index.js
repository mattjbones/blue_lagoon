import m from "mithril";
import Game from "./views/Game";
import Header from "./views/Header";
import "./app.css";

m.render(document.body, m("main", [m(Header), m(Game)]));
