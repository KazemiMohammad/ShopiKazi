import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
  faSignInAlt,
  faUserPlus,
  faAngleDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../assets/Logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="top_nav">
        <div className="top_nav_left">
          free shipping on all u.s orders over $50
        </div>
        <div className="top_nav_right">
          <ul className="top_nav_menu">
            <li className="item">
              <a href="\home">
                My Account
                <i>
                  <FontAwesomeIcon icon={faAngleDown} />
                </i>
              </a>
              <ul className="account_selection">
                <li>
                  <a href="\home">
                    <i aria-hidden="true">
                      <FontAwesomeIcon icon={faSignInAlt} />
                    </i>
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="\home">
                    <i aria-hidden="true">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </i>
                    Register
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_nav_container">
        <div className="logo">
          <img src={Logo} alt="seat Relax, shop Easy" />
          <span className="title">Shopi Kazi</span>
        </div>
        <nav className="navbar">
          <ul className="menu">
            <li><a href="\home">Home</a></li>
            <li><a href="\home">Shop</a></li>
            <li><a href="\home">Promotion</a></li>
            <li><a href="\home">Pages</a></li>
            <li><a href="\home">Blog</a></li>
            <li><a href="\home">Contact</a></li>
          </ul>
          <ul className="user">
            <li className="Search"><a href="\home"><FontAwesomeIcon icon={faSearch} /></a></li>
            <li className="User"><a href="\home"><FontAwesomeIcon icon={faUser} /></a></li>
            <li className="Checkout"><a href="\home"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
          </ul>
          <div className="hamburger_container">
            <i aria-hidden="true"><FontAwesomeIcon icon={faBars} /></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
