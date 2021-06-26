import React from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router-dom";
import "../style.scss";
import Parse from "parse";

interface signInProps extends RouteComponentProps {
  showSignUp: (e: React.MouseEvent<HTMLButtonElement>) => void;
  redirectFrom: string;
}
const InitialState = {
  buttonLoading: false,
  usernameError: false,
  passwordError: false,
  emailError: false,
  signinError: false,
  signinErrorMessage: "",
  username: "",
  password: "",
  email: "",
  logedIn: false,
};
export type signInStateType = Readonly<typeof InitialState>;

class Signin extends React.Component<signInProps, signInStateType> {
  readonly state: signInStateType = InitialState;

  changeHandler = (event: any) => {
    const name: string = event.target.getAttribute("id");
    const value: string = event.target.value;
    if (!value || value === "") {
      this.setState((prevState) => ({
        ...prevState,
        [`${name}Error`]: true,
        signinError:false,
        signinErrorMessage:""
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        [`${name}Error`]: false,
        [name]: value,
        signinError:false,
        signinErrorMessage:""
      }));
    }

  };

  handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await Parse.User.logIn(this.state.username, this.state.password);

      this.setState({ logedIn: true });
      this.props.history.push(this.props.redirectFrom);
    } catch (error) {
      this.setState((prevState) => ({
        ...prevState,
        signinError: true,
        signinErrorMessage: error.message,
      }));
    }
  };

  render() {
    return (
      <div className="signup-container">
        {this.state.logedIn ? <Redirect to={this.props.redirectFrom} /> : ""}
        <div className="title">
          <h1>Welcome Back!</h1>
        </div>
        <div className={"box-form"}>
          <form onSubmit={this.handleSubmit}>
            <div className="inline box-input">
              <label htmlFor="username">Username</label>
              <input
                required
                id="username"
                type="text"
                onChange={this.changeHandler}
              />
              <span
                className={
                  this.state.usernameError ? "displayErrors" : "noError"
                }
              >
                Username is required
              </span>
            </div>
            <div className="inline box-input">
              <label htmlFor="password">Password</label>
              <input
                required
                id="password"
                type="password"
                onChange={this.changeHandler}
              />
              <span
                className={
                  this.state.passwordError ? "displayErrors" : "noError"
                }
              >
                Password is required
              </span>
            </div>
            <div className="inline">
              <span
                className={
                  this.state.signinError ? "displayErrors" : "noError"
                }
              >
                {this.state.signinErrorMessage}
              </span>
            </div>
            <div className="inline">
              <button
                className="link"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  this.props.showSignUp(e);
                }}
              >
                Create accout
              </button>
            </div>

            <div className="inline">
              <button
                type="submit"
                className={"btn btn-primary"}
                disabled={
                  !this.state.username || !this.state.password ? true : false
                }
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);
