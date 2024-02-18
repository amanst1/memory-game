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

  const resetGame = () => {
    setScore(0)
    setStatus('')
    setClicked([])
  }

  const handleClick = (componentId) => {
      
      if(!clicked.includes(componentId)) {
        setClicked( prev => [...prev, componentId] )
        setScore(score => score + 1)
        setBestScore(bestScore => bestScore + 1)
        if(score === 11) {
          setStatus('victory')
        }
      }  else {
        setStatus('loss')
      }
  }
  
  //
  pokemons.map(pokemon => {
    images.push(<ImageComponent 
      key={pokemon.id}  id={pokemon.id} url={pokemon.url}
      onClick={(id) => handleClick(id)} /> )
  })
  
  return (
    <>
      <h1> Did I click on that...?</h1>
      <h3>Your Score: { score }</h3>
      <h4>Highscore: { bestScore } </h4>

      {status === '' &&
        (<div style={{display: 'flex', 'flex-flow': 'row wrap'}}>
          
            {images}
          
        </div>) } 
        
      {status === 'loss' &&
          (<div>
            <h1>Game Over</h1>
            <button onClick={() => resetGame()}> New Game </button>
          </div>)  
      }

      {status === 'victory' && <h1>Congratulations! You&apos;ve won. </h1> }
    </>
  )
}

export default App
