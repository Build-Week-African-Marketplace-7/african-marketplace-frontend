import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Categories from './components/Categories'
import { Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (

    <div>
      <Switch>
        
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>

    </div>
  )

}

export default App;