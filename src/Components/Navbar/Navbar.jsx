import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <a href="/">EVSOLUTION</a>
      </div>
      <ul className="nav__menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Electric_vehicle"
            target="_blank"
            rel="noreferrer"
          >
            Explore
          </a>
        </li>
        <li>
          <a href="https://www.nio.com/ec6" target="_blank" rel="noreferrer">
            About
          </a>
        </li>
        <li className="nav__contact">
          <a
            href="https://www.linkedin.com/in/amaan-naseh/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="nav__contact__btn">Contact</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
