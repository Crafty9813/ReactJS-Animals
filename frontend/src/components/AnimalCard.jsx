import "../css/AnimalCard.css";
import { useAnimalContext } from "../contexts/animalContext";

function AnimalCard({ animal }) {
  // Grab functions from the provider
  const { isFavorite, addToFavorites, removeFavorite } = useAnimalContext();
  const is_favorite = isFavorite(animal.id);

  // Add to favorites when click on heart
  function onFavoriteClick(e) {
    e.preventDefault();
    if (is_favorite) removeFavorite(animal.id);
    else addToFavorites(animal);
  }

  return (
    <div className="animal-card">
      <div className="animal-poster" style={{ position: "relative" }}>
        <img src={animal.image} alt={animal.species} />
        <button
          className={`favorite-btn ${is_favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
        >
          ♥
        </button>
        <div className="animal-overlay" />
      </div>
      <div className="animal-info">
        <h3>{animal.species}</h3>
        <p>{animal.description}</p>
      </div>
    </div>
  );
}

export default AnimalCard;
