import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";

import "./App.css";
// import Categories from './components/Categories'
import AddItem from "./components/AddItem";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/sell">
          <AddItem />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
