import React from 'react';
import "../../App.css";
import "../../index.css";
import {Link} from 'react-router-dom';

const Cereals = () => {

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
            <div>
                <h3>Product Name: Imported Rice</h3>
                <p>Location: Democratic Republic of Congo</p>
                <p>Price: 2 CDF</p>
                <p>Description: Asian imported japonica rice.</p>
            </div>
            <div>
                <h3>Product Name: Maize</h3>
                <p>Location: Rwanda</p>
                <p>Price: 2 RWF</p>
                <p>Description: Organic maize, perfect for a variety of dishes.</p>
            </div>
            <div>
                <h3>Product Name: Barley</h3>
                <p>Location: Burundi</p>
                <p>Price: 2 BIF</p>
                <p>Description: Organic barley for culinary use or distilling spirits.</p>
            </div>
            </div>
        </>
    )
}

export default Cereals;