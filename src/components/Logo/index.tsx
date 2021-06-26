import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "./../../assets/Logo.png";
import "./style.scss";

export default function Logo() {
  return (
    <div className="logo-component" data-testId="logo-component">
      <Link to="/">
        <div className="logo">
          <img src={LogoImage} alt="seat Relax, shop Easy" />
          <span className="title">Shopi Kazi</span>
        </div>
      </Link>
    </div>
  );
}

