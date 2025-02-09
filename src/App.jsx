import { useState } from "react";
import "./App.css";
import MovieAPI from "./components/MoviesAPI";
import Navbars from "./components/Navbars";
import "./assets/bootstrap.min.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "./components/Footer";

function App() {
  // State for Year, Genre, and Search Value
  const [year, setYear] = useState();
  const [newGenre, setNewGenre] = useState();
  const [searchValue, setSearchValue] = useState(""); // State to hold search query

  // Function to set current Year and Genre
  function setCurrentYear(year) {
    setYear(year);
  }

  function setCurrentGenre(newGenre) {
    setNewGenre(newGenre);
  }

  // Function to handle the search
  const handleSearch = (searchValue) => {
    console.log("Searching for:", searchValue);
    // Here you can implement your logic to search the movies based on searchValue
  };

  return (
    <>
      <MantineProvider>
        <Navbars
          setYear={setCurrentYear}
          year={year}
          setNewGenre={setCurrentGenre}
          newGenre={newGenre}
          searchValue={searchValue} // Pass searchValue to Navbars
          setSearchValue={setSearchValue} // Pass setSearchValue to Navbars
          handleSearch={handleSearch} // Pass handleSearch to Navbars
        />
        <MovieAPI year={year} newGenre={newGenre} searchValue={searchValue} />
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
