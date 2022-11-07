import React, { useState, useEffect } from "react";
import "./style.css";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 764) {
            setMenuOpen(true)
        }
    })
  }, []);

  return (
    <header>
      <div className="header_logo_container">
        <img className="header_logo" src="/src/assets/img/logo-orange-evolution.png" alt="" />
        <FiMenu
          size={24}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </div>
      {menuOpen && (
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Trihas</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FCamara</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
