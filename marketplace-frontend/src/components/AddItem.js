import React from "react";

const AddItem = () => {
  return (
    <div className="addItemListing">
      <form className="addItemForm">
        <h2>Add Item Listing</h2>
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
  );
};

export default AddItem;
