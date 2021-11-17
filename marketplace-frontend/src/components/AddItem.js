import React from "react";

const AddItem = () => {
  return (
    <div className="addItemListing">
      <form className="addItemForm">
        <h2>Add Item Listing</h2>
        <h3 className="addFormText">Name:</h3>
        <input type="text" className="addInputs" />
        <h3 className="addFormText">Description:</h3>
        <input type="text" className="addInputs" />
        <h3 className="addFormText">Market Location:</h3>
        <select className="addInputs">
          <option value="default">---</option>
          <option value="California">California</option>
          <option value="Florida">Florida</option>
          <option value="New York">New York</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Wisconsin">Wisconsin</option>
        </select>
        <h3 className="addFormText">Category:</h3>
        <select className="addInputs">
          <option value="default">---</option>
          <option value="Animal Products">Animal Products</option>
          <option value="Beans">Beans</option>
          <option value="Cereals">Cereals</option>
          <option value="Fruits">Fruits</option>
          <option value="Other">Other</option>
          <option value="Roots and Tubers">Roots and Tubers</option>
        </select>
        <h3 className="addFormText">Price: $</h3>
        <input type="integer" className="addInputs" />
      </form>
    </div>
  );
};

export default AddItem;
