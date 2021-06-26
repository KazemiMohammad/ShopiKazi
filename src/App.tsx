import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./default.scss";
import MainLayout from "./Layouts/MainLayout";
import ClearLayout from "./Layouts/ClearLayout";
import Main from "./Pages/Main";
import ProfilePage from "./Pages/Profile";
import Authentication, { AuthPageMode } from "./Pages/Authentication";
import Parse from "parse";
import parseConfig from "./environments";
import ProtectedRoute from "./utils/ProtectedRoute";

Parse.initialize(parseConfig.APPLICATION_ID, parseConfig.JAVASCRIPT_KEY);
Parse.serverURL = parseConfig.SERVER_URL;

function App() {
  let location = useLocation();

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
          path={["/signup", "/signin"]}
          render={() => {
            return (
              <ClearLayout>
                <Authentication
                  mode={
                    location.pathname === "/signin"
                      ? AuthPageMode.SignIn
                      : AuthPageMode.SignUp
                  }
                  {...location.state}
                />
              </ClearLayout>
            );
          }}
        />
        <ProtectedRoute
          exact
          path="/profile"
          render={() => {
            return (
              <MainLayout>
                <ProfilePage />
              </MainLayout>
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
