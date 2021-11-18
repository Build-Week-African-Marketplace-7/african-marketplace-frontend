import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import AddItem from "./components/AddItem";
import Register from "./components/Register";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  //create and update forms.
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const onSubmit = () => {
    setUsers([values, ...users]);
    setValues({ name: "", email: "", password: "" });
  };
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <Switch>
        <Route path="/sell">
          <AddItem />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register values={values} change={onChange} submit={onSubmit} />
          {users.map((user, id) => {
            return (
              <div key={id}>
                {user.name}, {user.email}, {user.password}
              </div>
            );
          })}
        </Route>

        <Route path="/categories">
          <Categories />
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
