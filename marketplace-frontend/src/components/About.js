import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../index.css";

export default function About() {
  const history = useHistory();

  return (
    <>
      <div class="header-categories">
        <header>
          <h1>WELCOME TO AFRICAN MARKETPLACE</h1>
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
       <div class="left">
          <p1>African Marketplace aims at providing a powerful international platform for African women to showcase their local agricultural and dairy products to the other African countries. We not only aim at giving them just a platform , our mission focuses on giving the farmers their freedom to set the price for their products competitively so that they receive what they deserve thereby propagating a fair-trade culture for these women in African regions. We believe in their products which are grown organically , harvested fresh, packed and preserved in high quality temperature controlled facilities and delivered efficiently to your doors. At African Marketplace we also provide support to these farmer women to help develop their business by educating them and providing them a voice to reach out to the world thus help them thrive. We put women as farmers, producers and customers at the centre of our business mission. </p1>
          <p1>We at African Marketplace set ourselves apart from it's competitors by Providing Fair Trade platform for our users. Ability to sell products belonging to multitude of product categories which helps all specialty local producers and sellers to sell their products with ease.No cost to the producer to ship their products. No cost to the producer to ship their products. Set competitive prices keeping in mind the current market rates set by other sellers.</p1>
       </div>
       <div class= "right">
         <img src="https://images.unsplash.com/photo-1548444835-0bc4a7d2a519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80" alt="abtwoman" width="500" height="500" />
       </div>
     </section>
     <section class="bottom-section">
      <div>
      <button id="loginbutton" type="button" onClick={() => history.push('/login')}> Login </button>
      </div>
     </section>
      
    </>
  );
}
