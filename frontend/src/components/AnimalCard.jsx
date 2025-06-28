function AnimalCard({animal}) {

    function onFavoriteClick() {
        alert("clicked")
    }
    return <div className = "animal-card">
        <div className="animal-img">
            <img src={animal.url} alt = {animal.species}/>
            <div className="animal-overlay">
                <button className = "favorite-btn" onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className = "animal-info">
            <h3>{animal.species}</h3>
            <p>{animal.description}</p>
        </div>
    </div>
}

export default AnimalCard