import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavagationBar from './NavagationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavagationBar></NavagationBar>
        <p>"Hello!"</p>
      </div>
    </>
  )
}

export default App
