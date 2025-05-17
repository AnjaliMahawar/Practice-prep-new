import React from 'react'
import AuthProvider from './AuthProvider'
import {Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

const App = () => {
  return (
   <AuthProvider>
     <Router>
        <Routes>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
        </Routes>
      </Router>
   </AuthProvider>
  )
}

export default App