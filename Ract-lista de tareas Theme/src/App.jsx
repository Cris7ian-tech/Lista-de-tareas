import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const themeStyles = {
  dark: {
    backgroundColor: '#282c34',
    color: 'white'
  },
  ligth: {
    backgroundColor: 'white',
    color: '#282c34'
  }
}

function App() {
  const [theme, setTheme] = useState('dark')
  
  const toggleTheme = () => theme === 'dark' ? setTheme('ligth') : setTheme('dark') 

  const [count, setCount] = useState(0)

  return (
    <>

      <div className='App'>
        <header className='App-header' style={{backgroundColor: themeStyles[theme].backgroundColor}}>
          
          <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          </a>        
      
          <h1>Vite + React</h1>
          
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <h2>
            Estas en el Theme {theme}
            </h2>
          </div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          
          </header>     
        
      </div>
    </>
  )
}

export default App
