import React from 'react';
import "../../App.css";
import "../../index.css";
import {Link} from 'react-router-dom';


const Dairy = () => {
    
    return (
        <>
        <div class="header-categories">
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
        <div class="prdt">
            <div >
                <h3>Product Name: Cheese</h3>
                <p>Location: Kenya</p>
                <p>Price: 3 KES</p>
                <p>Description: Natural cheese from free range cows.</p>
            </div>
            <div>
                <h3>Product Name: Milk</h3>
                <p>Location: Uganda</p>
                <p>Price: 2 UGX</p>
                <p>Description: Raw and natural milk that is creamy, organic and fresh.</p>
            </div>
            <div>
                <h3>Product Name: Ghee</h3>
                <p>Location: Tanzania</p>
                <p>Price: 2 TZS</p>
                <p>Description: All natural ghee, clarified butter, that is perfect for general culinary use.</p>
            </div>
        </div>
        </>
    )
}

export default Dairy;