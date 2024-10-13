// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import MovieAPI from './components/MovieAPI';
import Navbars from './components/Navbars'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  let [isAdult,setIsAdult] = useState(false) 


  function setIsAdultTrueFalse(adult){
    setIsAdult(adult)
  }



  return (
    <>
      <MantineProvider>
        <Navbars setIsAdult={setIsAdultTrueFalse} isAdult={isAdult}/>
        <MovieAPI isAdult={isAdult}/>
        
      </MantineProvider>
    </>
  )
}

export default App
