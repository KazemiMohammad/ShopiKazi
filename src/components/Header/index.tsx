import React from "react";
import {Link} from 'react-router-dom';
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
              <Link to="/profile">
                My Account
                <i>
                  <FontAwesomeIcon icon={faAngleDown} />
                </i>
              </Link>
              <ul className="account_selection">
                <li>
                  <Link to="/signin">
                    <i aria-hidden="true">
                      <FontAwesomeIcon icon={faSignInAlt} />
                    </i>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <i aria-hidden="true">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </i>
                    Register
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_nav_container">
        <Link to="/">
        <div className="logo">
          <img src={Logo} alt="seat Relax, shop Easy" />
          <span className="title">Shopi Kazi</span>
        </div>
        </Link>
        <nav className="navbar">
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/">Promotion</Link></li>
            <li><Link to="/">Pages</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
          <ul className="user">
            <li className="Search"><Link to="/"><FontAwesomeIcon icon={faSearch} /></Link></li>
            <li className="User"><Link to="/signup"><FontAwesomeIcon icon={faUser} /></Link></li>
            <li className="Checkout"><Link to="/"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
          </ul>
          <div className="hamburger_container">
            <i aria-hidden="true"><FontAwesomeIcon icon={faBars} /></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
