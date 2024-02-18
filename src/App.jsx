import pokemons from '../src/pokemons.js'
import { useState } from 'react'
import './App.css'
import ImageComponent from './components/ImageComponent'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [status, setStatus] = useState('')

  const images = []

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const resetGame = () => {
    setScore(0)
    setStatus('')
    setClicked([])
  }

  const handleClick = (componentId) => {
      
      if(!clicked.includes(componentId)) {
        setClicked( prev => [...prev, componentId] );
        setScore(score => score + 1);
        shuffle(pokemons);
        if(score === 11) {
          setStatus('victory')
        }
      }  else {
        setStatus('loss')
        score >= bestScore && setBestScore(score)
      }
  }

  
  // Populate array of Image components from pokemon array
  pokemons.map(pokemon => {
    images.push(<ImageComponent 
      key={pokemon.id}  id={pokemon.id} url={pokemon.url}
      onClick={(id) => handleClick(id)} /> )
  })
  

  return (
    <>
      <h1> Did I click on that...?</h1>
      <h4>Click on all images only once to win.</h4>
      <h2>Your Score: { score }</h2>
      <h3>Highscore: { bestScore } </h3>

      {status === '' &&
        (<div style={{display: 'flex', 'flex-flow': 'row wrap', 'justifyContent':'center'}}>
            {images}
        </div>) } 
        
      {status === 'loss' &&
          (<div>
            <h1>Game Over</h1>
            <button onClick={() => resetGame()}> Try Again! </button>
          </div>)  
      }

      {status === 'victory' && <h1>Congratulations! You&apos;ve won. </h1> }
    </>
  )
}

export default App
