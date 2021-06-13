import React from "react";
import { Switch, Route } from "react-router-dom";
import "./default.scss";
import MainLayout from "./Layouts/MainLayout";
import Main from "./Pages/Main";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <MainLayout>
                <Main />
              </MainLayout>
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={() => {
            return (
              <MainLayout>
                <Signup />
              </MainLayout>
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
