import "../css/Favorites.css";
import { useAnimalContext } from "../contexts/animalContext";
import AnimalCard from "../components/AnimalCard";

function Favorites() {
  const { favorites } = useAnimalContext();

  if (favorites && favorites.length > 0) {
    return (
      <div>
        <h2>Your Favorite Animals</h2>
        <div className="animals-grid">
          {favorites.map((animal) => (
            <AnimalCard animal={animal} key={animal.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite animals yet</h2>
      <p>Start adding animals to your favorites</p>
    </div>
  );
}

export default Favorites;
