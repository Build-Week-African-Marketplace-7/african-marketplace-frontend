import React from 'react'
import styled from 'styled-components'
import '../App.css'

const MenuLabel = styled.label`
  background-color: #b6edc8;
  /* position: fixed; */
  /* top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem; */
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

export default function App() {
  return (
    <div className="App">
      <h2> About African Marketplace</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button>Login</button>

      <div id="div1">
        <MenuLabel>Menu</MenuLabel>
      </div>
    </div>
  );
}



