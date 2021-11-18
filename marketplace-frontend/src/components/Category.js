import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
// import { useHistory } from 'react-router-dom';

const Category = () => {
    return (
<div className="header-categories">
            <header>
            <h1>Category</h1>
            </header>
      
            <nav className="nav-categories">
            <h1>Menu</h1>
            <Link to="/">Home</Link>
            <Link to="/about"> About </Link>
            <Link to="/categories">Products</Link>
            <Link to="/sell"> Sell </Link>
            <Link to="/contact">Contact</Link>
          </nav>

</div>

    )
};

export default Category