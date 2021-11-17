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
        <img src="https://images.unsplash.com/photo-1586802990196-ec7e6edd9739?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVnZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="eggs" />
          <p>Category 1</p>
          <p>Link</p>
        </div>

        <div className="box">
        <img src="https://images.unsplash.com/photo-1582401656496-9d75f95f9018?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2VyZWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cereal" />
          <p>Category 2</p>
          <p>Link</p>
        </div>

        <div className="box">
          <img src="https://images.unsplash.com/photo-1599579085809-4edbc35cee01?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="beans" />
          <p>Category 3</p>
          <p>Link</p>
        </div>
      </section>

      <section className="bottom">
        <div className="box">
        <img src="https://media.istockphoto.com/photos/fresh-mixed-fruits-picture-id467652436?b=1&k=20&m=467652436&s=170667a&w=0&h=SgDVjLV5rfJ-kJ80GYcQJ4CL1R0n4LoxTYXixnSZuWs=" alt="fruit" />
          <p>Category 4</p>
          <p>Link</p>
        </div>

        <div className="box">
        <img src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="vegetables" />
          <p>Category 5</p>
          <p>Link</p>
        </div>

        <div className="box">
        <img src="https://images.unsplash.com/photo-1600189083288-89e1c8b9b0cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG51dHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="nuts" />
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
