// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import MovieAPI from "./components/MoviesAPI";
import Navbars from "./components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  let [year, setYear] = useState();

  function setCurrentYear(year) {
    setYear(year);
  }

  let [newGenre, setNewGenre] = useState();

  function setCurrentGenre(newGenre) {
    setNewGenre(newGenre);
  }

  return (
    <>
      <MantineProvider>
        <Navbars
          setYear={setCurrentYear}
          year={year}
          setNewGenre={setCurrentGenre}
          newGenre={newGenre}
        />
        <MovieAPI year={year} newGenre={newGenre} />
      </MantineProvider>
    </>
  );
}

export default App;
