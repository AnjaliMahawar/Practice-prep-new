import React, { createContext, useContext, useState } from 'react'
const themecotext=createContext()
const ThemeProvider = ({children}) => {
    const[isDarkMode,setIsDarkMode]=useState(false)
    const chngeTheme=()=>{
        setIsDarkMode(prev=>!prev)
    }
  return (
    <themecotext.Provider value={{isDarkMode,chngeTheme}}>
        {children}
    </themecotext.Provider>
  )
}

export default ThemeProvider

// Custom hook to consume the theme context
export const useTheme=()=>{
    return useContext(themecotext)
}