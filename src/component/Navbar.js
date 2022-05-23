import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handelShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handelShow(true);
    } else {
      handelShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`navbar ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneTaQ1pv5Jf0SNlnQKS-SV1pRLl-RGtAbGg&usqp=CAU"
          // src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
