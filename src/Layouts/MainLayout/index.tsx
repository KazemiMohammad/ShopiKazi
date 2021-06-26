import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.scss";

export default function MainLayout(props: any) {
  return (
    <>
      <Header></Header>
      <div className="main-container">{props.children}</div>
      <Footer></Footer>
    </>
  );
}
