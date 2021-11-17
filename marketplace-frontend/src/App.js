import React from 'react'
import Home from './components/Home'

//import About from './components/About'
import { Route} from 'react-router-dom'


import './App.css';
import Categories from './components/Categories'

function App() {
  return (

    <div>
      <Route exact path="/">
          <Home />
      </Route>

    </div>
  )

      <Home />
  );

}

export default App;