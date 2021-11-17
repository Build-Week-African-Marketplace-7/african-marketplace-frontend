import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


export default function About() {
  
  return (
    <>  
    <nav>
      <h2> Menu </h2>
        <ul>
          <Link to="/home">
              <li> Home </li>
          </Link>
            <Link to="/about">
              <li> About </li>
            </Link>
            <Link to="/categories">
              <li> Products </li>
            </Link>
            <Link to="contact">
              <li> Contact </li>
            </Link>
        </ul>
    </nav>
    </>
  );
}

