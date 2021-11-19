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
                <h3>Product Name: Mangoes Ngowe</h3>
                <p>Location: Kenya</p>
                <p>Price: 3 KES</p>
                <p>Description: Specialty Mangoes.</p>
            </div>
            <div>
                <h3>Product Name: Pawpaw</h3>
                <p>Location: Uganda</p>
                <p>Price: 2 UGX</p>
                <p>Description: Rare forest fruit.</p>
            </div>
            <div>
                <h3>Product Name: Cavendish (Bogoya)</h3>
                <p>Location: Tanzania</p>
                <p>Price: 2 TZS</p>
                <p>Description: Locally grown organic superfruit</p>
            </div>
        </div>
        </>
    )
}

export default Dairy;