import React, { useState, useEffect } from "react";
import netflix from "./netflix.png";
import avatar from "./avatar-netflix.png";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <img src={netflix} alt="logo" className="nav_logo" />
      <img src={avatar} alt="logo" className="nav_avatar" />
    </div>
  );
};

export default Nav;
