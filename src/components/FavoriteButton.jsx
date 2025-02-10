import React from "react";
import { useFavorites } from "./FavoritesProvider"; // Import the useFavorites hook
import { FaStar, FaRegStar } from "react-icons/fa"; // Star icons
import { Button } from "react-bootstrap"; // Import Button from React Bootstrap

function FavoriteButton({ movie }) {
  const { favorites, updateFavorites } = useFavorites(); // Access favorites and the update function

  const toggleFavorite = (movieId) => {
    updateFavorites(movieId); // Update favorites on click
  };
  return (
    <Button
      variant="link"
      onClick={() => movie && toggleFavorite(movie.id)}
      style={{
        position: "absolute",
        bottom: "55px",
        right: "5px",
        background: "transparent",
        border: "none",
        transform:
          movie && favorites.includes(movie.id) ? "scale(1.2)" : "scale(1)", // Animate the star
        transition: "transform 0.3s ease", // Smooth scaling transition
      }}
    >
      {movie ? (
        favorites.includes(movie.id) ? (
          <FaStar size={24} color="#ffd700" />
        ) : (
          <FaRegStar size={24} color="#ffd700" />
        )
      ) : null}
    </Button>
  );
}

export default FavoriteButton;
