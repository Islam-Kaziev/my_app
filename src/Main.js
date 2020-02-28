import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";
import Settings from "./Settings";
import Mistake from "./Mistake";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Тестовое задание</h1>
          <ul className="header">
            <li><NavLink exact to="/">Главная страница</NavLink></li>
            <li><NavLink to="/Tasks">Список задач</NavLink></li>
            <li><NavLink to="/Settings">Настройки</NavLink></li>
            <li><NavLink to="/Mistake">Страница с ошибкой</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/Tasks" component={Tasks}/>
            <Route path="/Settings" component={Settings}/>
            <Route path="/Mistake" component={Mistake}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;