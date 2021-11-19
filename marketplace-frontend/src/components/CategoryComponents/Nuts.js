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
                <h3>Product Name: Simsim</h3>
                <p>Location: Kenya</p>
                <p>Price: 3 KES</p>
                <p>Description: Specialty Organic Nuts.</p>
            </div>
            <div>
                <h3>Product Name: Ground Nuts</h3>
                <p>Location: Uganda</p>
                <p>Price: 2 UGX</p>
                <p>Description: Organic ground nuts.</p>
            </div>
            <div>
                <h3>Product Name:Sunflower Seed</h3>
                <p>Location: Tanzania</p>
                <p>Price: 2 TZS</p>
                <p>Description: Organic Sunflower seeds.</p>
            </div>
        </div>
        </>
    )
}

export default Dairy;