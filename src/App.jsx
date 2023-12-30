import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavagationBar from './NavagationBar'

import Home from "./pages/Home"
import Cool from "./pages/Cool"
import More from "./pages/More"
import Stuff from "./pages/Stuff"

function App() {
  let component 
  switch(window.location.pathname){
    case "/myportfolio-test":
      component = <Home />
      break
    case "/myportfolio-test/Home":
      component = <Home />
      break
    case "/myportfolio-test/Cool":
      component = <Cool />
      break
    case "/myportfolio-test/More":
      component = <More />
      break
    case "/myportfolio-test/Stuff":
      component = <Stuff />
      break
    default:
      component = <Home />; // Default case, in case the path doesn't match any of the above
  }

  return (
    <>
      <div>
        <NavagationBar></NavagationBar>
        {component}
      </div>
    </>
  )
}

export default App
