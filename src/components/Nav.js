// import React, { useState } from "react";
import logo from "./logo.svg";
// import { isVisible } from "@testing-library/user-event/dist/utils";

const Nav = () => {
  
  return (

    <nav>  
       <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          {" "}
          <a href="/">Reservations</a>
        </li>
        <li>
          {" "}
          <a href="/">Order Online</a>
        </li>
        <li>
          {" "}
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
