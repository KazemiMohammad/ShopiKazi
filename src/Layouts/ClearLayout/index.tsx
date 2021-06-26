import React from "react";
import Logo from "../../components/Logo";
import "./style.scss";

export default function ClearLayout(props: any) {
  return (
    <div className="clear-layout-container">
      <div className="logo-container">
        <Logo />
      </div>
      {props.children}
    </div>
  );
}
