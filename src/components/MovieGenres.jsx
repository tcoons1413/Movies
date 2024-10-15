import { Dropdown, DropdownButton } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";

export default function MovieGenres({ newGenre, setNewGenre }) {
  const [movieGenre, setGenre] = useState({ genres: [] });
  useEffect(() => {
    async function getData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_KEY,
        },
      };

      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        options
      )
        .then((response) => response.json())
        .then((response) => setGenre(response))
        .catch((err) => console.error(err));
    }
    getData();
  }, [])
  let selectedGenre = movieGenre.genres?.find((selectGenre) => {
    return selectGenre.id === newGenre;
  });
  return (
    <div className="d-flex flex-column gap-3 ">
      <DropdownButton
        style={{ width: "150px" }}
        variant="outline-primary"
        align="start"
        title={selectedGenre?.name || "Select Genre"}
        id="dropdown-menu-align-start"
      >
        {movieGenre.genres?.map((genre) => {
          return (
            <Dropdown.Item
              key={genre.id}
              onClick={() => {
                setNewGenre(genre.id);
              }}
              eventKey="1"
            >
              {" "}
              {genre.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
}
