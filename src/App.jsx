import { useState } from 'react'
import './App.css'
import ImageComponent from './components/ImageComponent'

function App() {
  const [score, setCount] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const images = []

  for( let i = 0; i < 13; i++) {
    images.push[<ImageComponent/>]
  }
  console.log(images)
  return (
    <>
      <h1> Did I click on that...?</h1>
      <h3>Your Score: { score }</h3>
      <h4>Highscore: { bestScore } </h4>
    </>
  )
}

export default App
