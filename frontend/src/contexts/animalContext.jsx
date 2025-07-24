import { createContext, useState, useContext, useEffect } from "react";
const animalContext = createContext();

export const useAnimalContext = () => useContext(animalContext);

export const AnimalProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Local storaging
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    // Store JSON string for list of favorite animals
    // .parse converts to normal list
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  // Update & store new favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (animal) => {
    setFavorites((prev) => [...prev, animal]);
  };

  // Generate arr of animals filtering out the one w/ animalID
  const removeFavorite = (animalID) => {
    setFavorites((prev) => prev.filter((animal) => animal.id !== animalID));
  };

  const isFavorite = (animalID) => {
    return favorites.some((animal) => animal.id === animalID);
  };

  const values = {
    favorites,
    addToFavorites,
    removeFavorite,
    isFavorite,
  };

  // Make sure children can access things in 'values'
  return (
    <animalContext.Provider value={values}>{children}</animalContext.Provider>
  );
};
