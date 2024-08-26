import React, { useContext } from 'react'
import { ThemeContext } from '../components/ThemeContext'
import './styles.css'
const Home = () => {
   const{theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`home-container ${theme}`}>
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Home