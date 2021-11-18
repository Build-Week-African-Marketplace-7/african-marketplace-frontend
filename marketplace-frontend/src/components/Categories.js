import React from 'react'
import './CategoriesStyled.css'
import '../App.css'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Categories = () => {

  const history = useHistory();

  return (
    <>
      <div className="header-categories">
            <header>
            <h1>WELCOME TO AFRICAN MARKETPLACE</h1>
            </header>
      </div>

      <nav className="nav-categories">
        <h1>Menu</h1>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
        <Link to="/categories">Products</Link>
        <Link to="/sell"> Sell </Link>
        <Link to="/contact">Contact</Link>
        
      </nav>

      <div class="welcome">
        <button id="logoutbutton" type="button"  onClick={() => history.push('/about')}>Logout</button>
      </div>

      <section className="top">
        <div className="box">
        <img src="https://images.unsplash.com/photo-1586802990196-ec7e6edd9739?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVnZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="eggs" width="200" height="250"/>
          <h3>Dairy</h3>
          <button id="dairypr" type="button" onClick={() => history.push('/category')}> Animal Products </button>
        </div>

        <div className="box">
        <img src="https://images.unsplash.com/photo-1582401656496-9d75f95f9018?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2VyZWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="cereal" width="200" height="250" />
        <h3>Cereals</h3>
        <button id="cerealpr" type="button" onClick={() => history.push('/category')}>Cereal Products</button>
        </div>

        <div className="box">
          <img src="https://images.unsplash.com/photo-1599579085809-4edbc35cee01?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="beans" width="200" height="250"/>
          <h3>Beans</h3>
          <button id="beanspr" type="button" onClick={() => history.push('/category')}>Beans And Legumes</button>
        </div>
      </section>

      <section className="bottom">
        <div className="box">
          <img src="https://media.istockphoto.com/photos/fresh-mixed-fruits-picture-id467652436?b=1&k=20&m=467652436&s=170667a&w=0&h=SgDVjLV5rfJ-kJ80GYcQJ4CL1R0n4LoxTYXixnSZuWs=" alt="fruit" width="200" height="250" />
          <h3>Fresh Produce</h3>
          <button id="freshpr" type="button" onClick={() => history.push('/category')}>Fruits</button>
        </div>

        <div className="box">
        <img src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="vegetables" width="200" height="250" />
          <h3>Fresh Vegetables</h3>
          <button id="vegpr" type="button" onClick={() => history.push('/category')}>Vegetables</button>
        </div>

        <div className="box">
        <img src="https://images.unsplash.com/photo-1600189083288-89e1c8b9b0cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG51dHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="nuts"  width="200" height="250" />
          <h3>Health Foods</h3>
          <button id="nutpr" type="button" onClick={() => history.push('/category')}>Nuts</button>
        </div>
      </section>
      <footer></footer>
    </>
  );
};

export default Categories;
