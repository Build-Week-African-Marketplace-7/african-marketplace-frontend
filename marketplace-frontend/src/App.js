import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { Switch, Route} from 'react-router-dom'


import './App.css';
import Categories from './components/Categories'

function App() {
  return (

    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

    </div>
  )

}

export default App;