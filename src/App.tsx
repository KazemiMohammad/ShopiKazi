import React from "react";
import "./default.scss";
import MainLayout from "./Layouts/MainLayout";
import Main from "./Pages/Main";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Main />
      </MainLayout>
    </div>
  );
}

export default App;
