import React, { createContext, useState, useEffect } from "react";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../firebase";
import { useAuth } from "./FirebaseAuthContext";

const db = getFirestore(app);

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const { user } = useAuth(); // Get user from the AuthProvider
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      fetchFavorites(user.uid); // Fetch favorites when user is authenticated
    }
  }, [user]);

  const fetchFavorites = async (uid) => {
    const userDoc = doc(db, "users", uid);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      setFavorites(docSnap.data().favorites || []);
    } else {
      setFavorites([]);
    }
  };

  const updateFavorites = async (movieId) => {
    if (user) {
      const userDoc = doc(db, "users", user.uid);
      const updatedFavorites = favorites.includes(movieId)
        ? favorites.filter((id) => id !== movieId)
        : [...favorites, movieId];

      await setDoc(userDoc, { favorites: updatedFavorites }, { merge: true });
      setFavorites(updatedFavorites);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  return React.useContext(FavoritesContext);
};
