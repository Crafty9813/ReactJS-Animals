import AnimalCard from "../components/AnimalCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  // useState hook sets searchQuery as the state of search box, setSearchQuery func to update it
  const [searchQuery, setSearchQuery] = useState();

  const animals = [
    { id: 1, species: "Dog", description: "Cute" },
    { id: 2, species: "Cat", description: "Cute" },
  ];

  const handleSearch = (e) => {
    e.preventDefault(); // Keep search, don't clear it
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for animal species"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update the searchQuery
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="animals-grid">
        {animals.map(
          (animal) =>
            animal.species.toLowerCase().startsWith(searchQuery) && (
              <AnimalCard animal={animal} key={animal.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
