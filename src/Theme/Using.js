import React from 'react'
import { useTheme } from './ThemeProvider'
import './App.css';

const Using = () => {
    const {isDarkMode,chngeTheme}=useTheme()
  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
    <div >
        <h1>my name is Anjali</h1>
    </div>
    <button onClick={chngeTheme}>
    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
  </button>
  </div>
  )
}

export default Using