import React, { useRef } from "react";
import {Signup,Signin} from "../../components/Authentication/";
import "./style.scss";

interface AuthProps{
  mode:AuthPageMode,
  redirectFrom?:string
}

export enum AuthPageMode{
  SignIn,
  SignUp
}
export default function AuthenticationPage( props:AuthProps) {
  const signupElement = useRef<HTMLInputElement>(null);
  const signinElement = useRef<HTMLInputElement>(null);
  const formElement = useRef<HTMLInputElement>(null);
  console.log(props);

  const showSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      signinElement.current &&
      signupElement.current &&
      formElement.current 
    ) {
      signinElement.current.className = "signin hide ";
      signupElement.current.className = "signup show ";
      formElement.current.className = "form left";
    }
  };

  const showSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      signinElement.current &&
      signupElement.current &&
      formElement.current 
    ) {
      signinElement.current.className = "signin show ";
      signupElement.current.className = "signup hide ";
      formElement.current.className = "form right";
    }
  };

  return (
    <div className="signup-page-container">
      <div className="signup-frame">
      <div className={props.mode===AuthPageMode.SignIn? "form left":"form right"} ref={formElement}>
          <div className={props.mode===AuthPageMode.SignIn? "signin hide":"signin show"} ref={signinElement}>
            <Signup showSignIn={showSignIn}  redirectFrom={props.redirectFrom?props.redirectFrom:"/"} />
          </div>
          <div className="banner ">
           
          </div>
          <div className={props.mode===AuthPageMode.SignUp? "signup hide":"signup show"} ref={signupElement}>
            <Signin showSignUp={showSignUp} redirectFrom={props.redirectFrom?props.redirectFrom:"/"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
