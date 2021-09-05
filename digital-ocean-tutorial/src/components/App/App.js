import React from 'react';
import './App.css';
import animals from './data';
import AnimalCard from '../AnimalCard/AnimalCard'

import Instructions from '../Instructions/Instructions.js'

const displayEmojiName = event => alert(event.target.id)
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
]

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
  .map(information => `${information[0]}: ${information[1]}`)
  .join('\n')
  alert(alertInformation)
}

function App() {
  const greeting = "greeting"
  const displayAction = false
  return(
  <>
  <div className="container">
    <h1 id={greeting}>Hello, world</h1>
    {displayAction && <p>I am writing JSX</p>}
    <Instructions/>
    <ul>
    {emojis.map(emoji => (
      <li key={emoji.name}>
        <button onClick={displayEmojiName}>
          <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
        </button>
      </li>)
    )}
    </ul>
  </div>
  <div className="wrapper">
    <h1>Animals</h1>
    {animals.map(animal => (<AnimalCard
                            additional={animal.additional}
                            diet={animal.diet}
                            key={animal.name}
                            name={animal.name}
                            scientificName={animal.scientificName}
                            showAdditional={showAdditional}
                            size={animal.size}
                          />
    ))}
  </div>
  </>
)}

export default App;
