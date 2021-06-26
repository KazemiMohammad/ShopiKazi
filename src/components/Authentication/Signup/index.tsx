import React from "react";
import "../style.scss";
import Parse from "parse";
import { Redirect } from "react-router-dom";
type MyProps = {
  showSignIn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  redirectFrom?: string;
};
const InitialState = {
  buttonLoading: false,
  usernameError: false,
  passwordError: false,
  emailError: false,
  signupError: false,
  signupErrorMessage: "",
  username: "",
  password: "",
  email: "",
};
export type MyState = Readonly<typeof InitialState>;

class Signup extends React.Component<MyProps, MyState> {
  readonly state: MyState = InitialState;

  changeHandler = (event: any) => {
    const name: string = event.target.getAttribute("id");
    const value: string = event.target.value;
    console.log(value);
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
    let user = new Parse.User();
    user.set("username", this.state.username);
    user.set("password", this.state.password);
    user.set("email", this.state.email);

    try {
      await user.signUp().then((result) => {
        return (
          <Redirect
            to={{
              pathname: this.props.redirectFrom ? this.props.redirectFrom : "/"
            }}
          />
        );
      });
    } catch (error) {
      this.setState((prevState) => ({
        ...prevState,
        signupError: true,
        signupErrorMessage: error.message,
      }));    }
  };

  render() {
    return (
      <div className="signup-container">
        <div className="title">
          <h1>Create account</h1>
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
              <label htmlFor="email">Email</label>
              <input
                required
                id="email"
                type="email"
                onChange={this.changeHandler}
              />
              <span
                className={this.state.emailError ? "displayErrors" : "noError"}
              >
                Email is required
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
                  this.state.signupError ? "displayErrors" : "noError"
                }
              >
                {this.state.signupErrorMessage}
              </span>
            </div>
            <div className="inline">
              <button
                className="link"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  this.props.showSignIn(e);
                }}
              >
                I have already an accout!
              </button>
            </div>
            <div className="inline">
              <button
                type="submit"
                className={"btn btn-primary"}
                disabled={
                  (
                    !this.state.username ||
                    !this.state.password ||
                    !this.state.email
                      ? true
                      : false
                  )
                    ? true
                    : false
                }
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
