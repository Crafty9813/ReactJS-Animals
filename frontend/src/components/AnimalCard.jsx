import "../css/AnimalCard.css";

function AnimalCard({ animal }) {
  function onFavoriteClick() {
    alert("clicked");
  }
  return (
    <div className="animal-card">
      <div className="animal-img" style={{ position: "relative" }}>
        <img src={animal.image} alt={animal.species} />
        <button className="favorite-btn" onClick={onFavoriteClick}>
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
