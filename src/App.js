import React from 'react'
import Home from './components/Home'
import { ThemeProvider } from './components/ThemeContext'
const App = () => {
  return (
<ThemeProvider>
    <Home/>
</ThemeProvider>
    
  )
}

export default App