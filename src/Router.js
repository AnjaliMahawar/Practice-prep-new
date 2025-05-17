import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Testing/Login'
import ArrayMethods from './State/ArrayMethods'
import Dynamic from './Dynamic'
import Dynamic2 from './Dynamic2'


const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ArrayMethods/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/dy' element={<Dynamic />} />
          <Route path='/dy/:id' element={<Dynamic2 />} />
          {/* <Route path={navigate.LOGIN} element={<Screens.Login />} />
          <Route path={navigate.FORGOTPASSWORD} element={<Screens.ForgotPassword />} />
          <Route path={navigate.RESETPASSWORD} element={<Screens.ResetPassword />} />
          <Route element={<CommonOutlet />}>
            <Route path={navigate.VIEWDETAIL} element={<Screens.ViewDetails/>} />
            <Route path={navigate.HOME} element={<Screens.LandingPage />} />
            <Route path={navigate.INTROPAGE} element={<Screens.IntroPage />} />
            <Route path={navigate.ASKME} element={<Screens.AskMe />} />
            <Route path={navigate.VISITSTORE} element={<Screens.StorePage />} />
            <Route path={navigate.DASHBOARD} element={<Screens.Dashboard />} />
            <Route path={navigate.ABOUTUS} element={<Screens.AboutUs />} />
            <Route path={navigate.CONTACTUS} element={<Screens.ContactUs />} />
            <Route path={navigate.BUY_NOW} element={<Screens.BuyNow />} />
            <Route path={navigate.BILLING_DETAIL} element={<Screens.BillingDetails />} />
          </Route>
          <Route element={<PublicRoute />}>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={navigate.PROFILE} element={<Screens.MyProfile />} />
          </Route> */}
        </Routes>
      </BrowserRouter>

  )
}

export default Router

// The useLocation hook returns the current location object. This object contains 
// information about the current URL, including the pathname, search parameters,
//  hash, and state.

// The useHistory hook gives you access to the history object, which allows you to 
// perform programmatic navigation, manipulate the browser's history stack, and 
// access location-related information.