import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MovieYoutube({
  newYoutubeURL,
  show,
  handleClose,
  selectedTitle,
}) {
  const [youtubeURL, setYouTubeURL] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${newYoutubeURL}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
            },
          }
        );
        const data = await response.json();

        // Look specifically for trailers, not other types of videos
        const youtubeTrailer = data.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );

        // Set the video key or fallback to an empty string
        setYouTubeURL(youtubeTrailer ? youtubeTrailer.key : "");
      } catch (error) {
        console.error("Error fetching YouTube video:", error);
      }
    }

    if (newYoutubeURL) {
      getData();
    }
  }, [newYoutubeURL]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "white", fontWeight: "bold" }}>
          {selectedTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {youtubeURL ? (
          <iframe
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${youtubeURL}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
