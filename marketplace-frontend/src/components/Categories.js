import React from 'react'
import '../App.css'
import '../index.css'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <>
      <div className="header-categories">
        <header>
          <h1>WELCOME TO AFRICAN MARKETPLACE</h1>
        </header>
      </div>
      <nav className="nav-categories">
        <h2>Menu</h2>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
        <Link to="/categories">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div class="welcome">
        <h2>Welcome User!</h2>
        <button>Logout</button>
      </div>

      <section className="top">
        <div className="box">
          <p>Category 1</p>
          <p>Link</p>
        </div>

        <div className="box">
          <p>Category 2</p>
          <p>Link</p>
        </div>

        <div className="box">
          <p>Category 3</p>
          <p>Link</p>
        </div>
      </section>

      <section className="bottom">
        <div className="box">
          <p>Category 4</p>
          <p>Link</p>
        </div>

        <div className="box">
          <p>Category 5</p>
          <p>Link</p>
        </div>

        <div className="box">
          <p>Category 6</p>
          <p>Link</p>
        </div>
      </section>
      <footer>
        
      </footer>
    </>
  )
}

export default Categories
