import React from "react";
import ReactGoogleLogin from "react-google-login";
export default function GoogleLogin() {
  const onResponse = (resp:any) => {
    console.log("reponse",resp);
  };
  return (
    <ReactGoogleLogin
      clientId='180703944223-bplc3ms0spa3c159d0oth9vvvguh64hv.apps.googleusercontent.com'// We created this earlier, remember?
      buttonText="Login with Google"
      onSuccess={onResponse}
      onFailure={onResponse}
    />
  );
}