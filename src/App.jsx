// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import MovieAPI from "./components/MoviesAPI";
import Navbars from "./components/Navbars";
import "./assets/bootstrap.min.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "./components/Footer";

// - This is my main component.
function App() {
  // - State management in the main to pass props
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
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
