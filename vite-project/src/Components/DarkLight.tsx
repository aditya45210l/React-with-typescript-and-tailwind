import React, { useContext } from 'react'
import { themeContext } from './TheamContext'

function DarkLight() {

    const {theme,toggleTheme} = useContext(themeContext)
  return (
    <div className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-black bg-white'} w-screen h-screen`}>
        <h2>hi i am {theme} theme</h2>
        <button onClick={toggleTheme}>{theme}</button>
    </div>
  )
}

export default DarkLight