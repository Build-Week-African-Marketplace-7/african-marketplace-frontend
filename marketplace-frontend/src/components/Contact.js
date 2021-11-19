import React from 'react'
import './Contact.css'
import '../App.css'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div class="header-categories">
            <header>
            <h1>CONTACT US</h1>
            </header>
      </div>

      <nav class="nav-categories">
        <h1>Menu</h1>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
        <Link to="/categories">Products</Link>
        <Link to="/sell"> Sell </Link>
        <Link to="/contact">Contact</Link>
        
      </nav>
        <section class="top-section">
          <div className="cont-left">
            <h4>Email:</h4>
            contact@africanmarketplace.com
            <h4>Phone:</h4>
            +1 832-149-0942
            <h4>Address:</h4>
            123 ABC Street
            <br />
            Houston, Texas
            <br />
            USA {" "}
          </div>
          <div class="cont-right">
            <img src="https://images.unsplash.com/photo-1570135460237-510ca82c6781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80" alt="cntimg" width="500" height="550" />
          </div>
        </section>
    </>
  );
};

export default Contact;
