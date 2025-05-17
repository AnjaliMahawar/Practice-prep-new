import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from '../Todo'
import Memo from '../Memo'
import Parent from '../CallbackChildToParent.js/Parent'
import ParentRef from '../ForwardRef.js/ParentRef'

const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Todo/>}/>
                <Route path='/memo' element={<Memo/>}/>
                <Route path='/forwardref' element={<ParentRef/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes