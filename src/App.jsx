// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MovieAPI from './components/movieAPI'
import Navbars from './components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Navbars/>
      <MovieAPI/>
    </>
  )
}

export default App
