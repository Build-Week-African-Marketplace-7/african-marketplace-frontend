import React from 'react'
import './CategoriesStyled.css'

const Categories = () => {
  return (
    <>
      <div className="header-categories">
        <header>
          <a><i class="fas fa-home"></i></a>
        </header>
      </div>

        <nav className="nav-categories">
          <h1>Menu</h1>
          <a href="/">Home</a>
          <a href="">About</a>
          <a href="">Products</a>
          <a href="">Contact</a>
        </nav>

      <div>
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
