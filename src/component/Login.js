import React from "react";
import slackLogo from "./slack-logo.png";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={slackLogo} />
        <h1>Sign in to Slack Clone</h1>
        <p>by Koshik Panchal</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
