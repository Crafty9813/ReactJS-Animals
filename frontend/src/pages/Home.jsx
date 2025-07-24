import AnimalCard from "../components/AnimalCard";
import { useState } from "react";
import "../css/Home.css";
import dogImage from "../assets/images/dog.webp";
import catImage from "../assets/images/cat.webp";
import fishImage from "../assets/images/fish.webp";
import birdImage from "../assets/images/bird.webp";

function Home() {
  // useState hook sets searchQuery as the state of search box, setSearchQuery func to update it
  const [searchQuery, setSearchQuery] = useState("");

  const animals = [
    {
      id: 1,
      species: "Dog",
      description: "Dogs come from wolves, they are commonly pets.",
      image: dogImage,
    },
    {
      id: 2,
      species: "Cat",
      description: "Cats are pets, originating from larger wild cats.",
      image: catImage,
    },
    {
      id: 3,
      species: "Fish",
      description: "Fish are aquatic animals. They swim.",
      image: fishImage,
    },
    {
      id: 4,
      species: "Bird",
      description: "Birds are flying animals related to dinosaurs!",
      image: birdImage,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault(); // Keep search, don't clear it

    if (!searchQuery.trim()) return;

    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for animals (i.e. dog, cat, etc."
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
