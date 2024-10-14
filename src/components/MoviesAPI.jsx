import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MovieYoutube from "./MovieYoutube";
// import Paginations from "./Paginations";

export default function MovieAPI({ year, newGenre }) {
  const [movieData, setData] = useState({ results: [] });
  const cardStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };
  const [selectedTitle, setSelectedTitle] = useState("");

  let [newYoutubeURL, setNewYouTubeURL] = useState("LYaJVfiwv0w");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function setCurrentYouTubeURL(youtubeURL) {
    setNewYouTubeURL(youtubeURL);
  }

  //Movie Data
  useEffect(() => {
    async function getData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_KEY,
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&include_adult=true&page=1&with_genres=${
          newGenre === undefined ? "28" : newGenre
        }`,
        options,
        options
      );
      const data = await response.json();
      setData(data);
    }
    getData();
  }, [year, newGenre]);

  // movieData.results.map((movie) => {
  //   console.log(movie.id);
  // });

  // eslint-disable-next-line no-prototype-builtins
  if (movieData.hasOwnProperty("success")) {
    return <h1 className="text-center">Error: Page is under construction.</h1>;
  } else {
    return (
      <div style={cardStyles}>
        {movieData.results?.map((url) => (
          <Card key={crypto.randomUUID()} style={{ width: "18rem" }}>
            <div>
              <Card.Img
                className="hover-card"
                variant="top"
                src={"https://image.tmdb.org/t/p/w500" + url.poster_path}
                onClick={() => {
                  setShow(true);
                  setNewYouTubeURL(url.id);
                  setSelectedTitle(url.title);
                }}
              />
            </div>
            <Card.Body>
              <div className="d-flex flex-column">
                <div className="cardTitle">
                  <Card.Title>{url.original_title}</Card.Title>
                </div>
                <div className="cardText">{url.overview}</div>
              </div>
            </Card.Body>
          </Card>
        ))}
        <MovieYoutube
          newYoutubeURL={newYoutubeURL}
          setNewYouTubeURL={setCurrentYouTubeURL}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          selectedTitle={selectedTitle}
        />
      </div>
    );
  }
}
