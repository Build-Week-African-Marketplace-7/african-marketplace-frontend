import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import AddItem from "./components/AddItem";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Login from "./components/Login"
import Dairy from "./components/CategoryComponents/Dairy"
import Cereals from "./components/CategoryComponents/Cereals"
import Beans from "./components/CategoryComponents/Beans"
import Fresh from "./components/CategoryComponents/Fresh"
import Veggies from "./components/CategoryComponents/Veggies"
import Nuts from "./components/CategoryComponents/Nuts"
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  //create and update forms.
  const [values, setValues] = useState({ name: "", password: "" });

  const onSubmit = () => {
    setUsers([values, ...users]);
    setValues({ username: "", password: "" });
  };
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login values={values} change={onChange} submit={onSubmit} />
          {users.map((user, id) => {
            return (
              <div key={id}>
                {user.username}, {user.password}
              </div>
            );
          })}
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/dairy">
          <Dairy />
        </Route>
        <Route path="/cereals">
          <Cereals />
        </Route>
        <Route path="/beans">
          <Beans />
        </Route>
        <Route path="/fruits">
          <Fresh />
        </Route>
        <Route path="/veggies">
          <Veggies />
        </Route>
        <Route path="/nuts">
          <Nuts />
        </Route>
        <Route path="/sell">
          <AddItem />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
