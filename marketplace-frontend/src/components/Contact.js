import React from 'react'
import './Contact.css'
import '../App.css'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <>

      <div className="header-categories">
            <header>
            <h1>CONTACT US</h1>
            </header>
      </div>

      <nav className="nav-categories">
        <h1>Menu</h1>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
        <Link to="/categories">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/sell"> Sell </Link>
      </nav>
      <div className="container">
        <div className="contact-box">
              <div className="contact-row">
              </div>
          <div className="contact-right">
            <table>
              <div className="data1">
                <td>Email:</td>
                <td>contact@africanmarketplace.com</td>
              </div>
              <div className="data2">
                <td>Phone:</td>
                <td>+1 832-149-0942</td>
              </div>
              <div className="data3">
                <td>Address:</td>
                <td>
                    123 ABC Street
                  <br />
                  Houston, Texas
                  <br />
                  USA {" "}
                </td>
              </div>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
