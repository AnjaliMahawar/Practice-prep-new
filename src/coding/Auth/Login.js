import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
  return (
    <div>Login
        <button onClick={login}>lets in </button>
    </div>
  )
}

export default Login