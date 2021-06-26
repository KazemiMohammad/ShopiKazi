import * as React from "react";
import { Route,  RouteProps, useHistory } from "react-router-dom";
import { AuthPageMode } from "../Pages/Authentication";
import Parse from "parse";

const ProtectedRoute = (props: RouteProps) => {
  const { component: Component, ...rest } = props;
  let history = useHistory();

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!Parse.User.current()) {
          history.push({
            pathname: "/signin",
            state: {
              mode: AuthPageMode.SignIn,
              redirectFrom: routeProps.location.pathname,
            },
          });
        }

        if (props.component) {
          return React.createElement(props.component);
        }

        if (props.render) {
          return props.render(routeProps);
        }
      }}
    />
  );
};

export default ProtectedRoute;
