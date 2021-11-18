// import React from 'react'
import '../App.css'
import '../index.css'
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact-box">
              <div className="contact-row">
              </div>
              
          <div className="contact-right">
            <h1>Contact Us</h1>
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
