import React from "react";
import { Link } from "react-router-dom";

const AddItem = () => {
  return (
  <>

      <nav className="nav-categories">
        <h1>Menu</h1>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
        <Link to="/categories">Products</Link>
        <Link to="/sell"> Sell </Link>
        <Link to="/contact">Contact</Link>
      </nav>
    <div className="header-categories">
        <header>
          <h1> Create Product </h1>
        </header>
      </div>
      <div>
        
      </div>
    <div className="addItemListing">
      <form className="addItemForm">
      <h3> Add A Product </h3>
        <section className="addItemSection">
          <div className="inputContainers">
            <p className="addFormText">Name:</p>
            <input type="text" className="addInputs" />
          </div>
          <div className="inputContainers">
            <p className="addFormText">Description:</p>
            <input type="text" className="addInputs" />
          </div>
          <div className="inputContainers">
            <p className="addFormText">Market Location:</p>
            <select className="addInputs">
              <option value="default">---</option>
              <option value="California">California</option>
              <option value="Florida">Florida</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Wisconsin">Wisconsin</option>
            </select>
          </div>
          <div className="inputContainers">
            <p className="addFormText">Category:</p>
            <select className="addInputs">
              <option value="default">---</option>
              <option value="Animal Products">Animal Products</option>
              <option value="Beans">Beans</option>
              <option value="Cereals">Cereals</option>
              <option value="Fruits">Fruits</option>
              <option value="Other">Other</option>
              <option value="Roots and Tubers">Roots and Tubers</option>
            </select>
          </div>
          <div className="inputContainers">
            <p className="addFormText">Price: $</p>
            <input type="integer" className="addInputs" />
          </div>
        </section>
      </form>
    </div>
  </>
  );
};

export default AddItem;
