import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MovieYoutube({
  newYoutubeURL,
  setNewYouTubeURL,
  show,
  handleShow,
  handleClose,
  selectedTitle,
  searchValue,
}) {
  console.log(searchValue)
  const [youtubeURL, setYouTubeURL] = useState({ results: [] });
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
        `https://api.themoviedb.org/3/movie/${newYoutubeURL}/videos?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) =>
          setYouTubeURL(
            response.results.filter((movie) => {
              return movie.site === "YouTube";
            })[0].key
          )
        )
        .catch((err) => console.error(err));
    }
    if (youtubeURL !== undefined) {
      getData();
    }
  }, [newYoutubeURL]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="300px"
            src={"https://www.youtube.com/embed/" + youtubeURL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
