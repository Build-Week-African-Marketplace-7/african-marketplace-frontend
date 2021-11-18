import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../App.css";
import "../index.css";

export default function About() {
  const history = useHistory();

  return (
    <>
      <div className="header-categories">
        <header>
          <h1>WELCOME TO AFRICAN MARKETPLACE</h1>
        </header>
      </div>

      <nav className="nav-categories">
        <h1>Menu</h1>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
        <Link to="/categories">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="abtsection">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s
          is reproduced below for those interested. Sections 1.10.32 and 1.10.33
          from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
          their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham.
        </p>

        <button id="loginbutton" type="button">
          {" "}
          Login{" "}
        </button>
        <button
          id="regisbutton"
          type="button"
          onClick={() => history.push("/register")}
        >
          {" "}
          Register{" "}
        </button>
      </div>
    </>
  );
}
