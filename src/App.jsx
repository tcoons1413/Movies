import { useEffect, useState } from "react";
import "./App.css";
import MovieAPI from "./components/MoviesAPI";
import Navbars from "./components/Navbars";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/FirebaseAuthContext";
import { FavoritesProvider } from "./components/FavoritesProvider";

function App() {
  // State for Year, Genre, and Search Value, isTyping
  const [year, setYear] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Function to set current Year and Genre
  function setCurrentYear(year) {
    setYear(year);
  }

  function setCurrentGenre(newGenre) {
    setNewGenre(newGenre);
  }

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 500);

    if (searchValue) {
      setIsTyping(true);
    }

    return () => clearTimeout(typingTimer);
  }, [searchValue]);

  return (
    <>
      <AuthProvider>
        <FavoritesProvider>
          <MantineProvider>
            <Navbars
              setYear={setCurrentYear}
              year={year}
              setNewGenre={setCurrentGenre}
              newGenre={newGenre}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              isTyping={isTyping}
            />
            <MovieAPI
              year={year}
              newGenre={newGenre}
              searchValue={searchValue}
              isTyping={isTyping}
            />
            <Footer />
          </MantineProvider>
        </FavoritesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
