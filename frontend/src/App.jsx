import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

import AnimalCard from './components/AnimalCard'

function App() {

  const animalNumber = 1;



  return (
      <>
        <Home />

      
      {/*{animalNumber === 1 && <AnimalCard animal = {{species: "Dog", description: "Came from wolves, cute."}}/>}

      {animalNumber === 1? (
        <AnimalCard animal = {{species: "Dog", description: "Came from wolves, cute."}}/>
      ) : (
        <AnimalCard animal = {{species: "Cat", description: "Came from wildcats, cute."}}/>
      )}
      */}
    </>
  );
}

export default App
