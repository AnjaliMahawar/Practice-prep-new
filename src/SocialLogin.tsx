import React, { useCallback, useState } from 'react'
import {
    LoginSocialGoogle,
    IResolveParams,
  } from 'reactjs-social-login'
  import ReactGoogleLogin from "react-google-login";
function SocialLogin() {
    const [provider, setProvider] = useState('')
    const [profile, setProfile] = useState<any>()
    const onLoginStart = useCallback(() => {
        alert('login start')
      }, [])
     
      const onResponse = (resp:any) => {
        console.log(resp);
      };
  return (
    <div>
       {/* <LoginSocialGoogle
            isOnlyGetToken
            client_id={process.env.REACT_APP_GG_APP_ID || ''}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }: IResolveParams) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <button>Login</button>
          </LoginSocialGoogle> */}

<ReactGoogleLogin
      clientId="<Your Client ID Here>" // We created this earlier, remember?
      buttonText="Login with Google"
      onSuccess={onResponse}
      onFailure={onResponse}
    />
    </div>
  )
}

export default SocialLogin
