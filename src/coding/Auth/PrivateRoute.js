import React, { useContext } from 'react'
import AuthProvider from './AuthProvider'
import {Route,Redirect} from 'react-router-dom'
import Login from './Login'
const PrivateRoute = ({component: Component, ...rest }) => {
    const {isAuth}=useContext(AuthProvider)
  return (
   <Route
   {...rest}
   render={(props) =>
    isAuth ? (
      <Component {...props} />
    ) : (
        <Login/>
    )
   }
   /> 

  )
}

export default PrivateRoute