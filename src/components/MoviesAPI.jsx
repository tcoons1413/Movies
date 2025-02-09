import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MovieYoutube from "./MovieYoutube";

export default function MovieAPI({ year, newGenre = "28" }) {
  const [movieData, setMovieData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [newYoutubeURL, setNewYouTubeURL] = useState("LYaJVfiwv0w");
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const handleClose = () => setShow(false);

  async function fetchMovies(pageNum) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&include_adult=true&page=${pageNum}&with_genres=${newGenre}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
          },
        }
      );
      const data = await response.json();
      setMovieData((prevMovies) => [...prevMovies, ...data.results]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    setMovieData([]);
    setPage(1);
    fetchMovies(1);
  }, [year, newGenre]);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    if (page > 1) {
      fetchMovies(page);
    }
  }, [page]);

  function toggleDescription(id) {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px",
        alignItems: "start", // Prevent Bootstrap height issues
      }}
    >
      {movieData.map((movie) => (
        <Card
          key={movie.id}
          style={{
            width: "18rem",
            display: "flex",
            flexDirection: "column",
            minHeight: "400px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Card.Img
            className="hover-card"
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onClick={() => {
              setShow(true);
              setSelectedTitle(movie.title);
              setNewYouTubeURL(movie.id);
            }}
          />
          <Card.Body style={{ display: "flex", flexDirection: "column" }}>
            <Card.Title>{movie.original_title}</Card.Title>

            {/* Description with Animation */}
            <div
              style={{
                maxHeight: expandedDescriptions[movie.id] ? "150px" : "0px",
                opacity: expandedDescriptions[movie.id] ? 1 : 0,
                overflow: "hidden",
                transition:
                  "max-height 0.4s ease-in-out, opacity 0.3s ease-in-out",
              }}
            >
              <Card.Text>{movie.overview}</Card.Text>
            </div>

            {/* Toggle Button */}
            <Button
              variant="primary"
              onClick={() => toggleDescription(movie.id)}
              className="mt-auto"
            >
              {expandedDescriptions[movie.id]
                ? "Hide Description"
                : "Show Description"}
            </Button>
          </Card.Body>
        </Card>
      ))}
      {loading && <h3 className="text-center">Loading more movies...</h3>}
      <MovieYoutube
        newYoutubeURL={newYoutubeURL}
        setNewYouTubeURL={setNewYouTubeURL}
        show={show}
        handleClose={handleClose}
        selectedTitle={selectedTitle}
      />
    </div>
  );
}
