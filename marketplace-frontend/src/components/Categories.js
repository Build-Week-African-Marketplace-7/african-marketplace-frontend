import React from 'react'
import './CategoriesStyled.css'

const Categories = () => {
  return (
    <>
      <div className="header-categories">
        <header>
        <i class="fas fa-home"></i>
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

      <section>
        <div>
          <p>Category 1</p>
          <p>Link</p>
        </div>

        <div>
          <p>Category 1</p>
          <p>Link</p>
        </div>

        <div>
          <p>Category 1</p>
          <p>Link</p>
        </div>
      </section>
      <footer>
        
      </footer>
    </>
  )
}

export default Categories
