import React from 'react'
import { useState } from 'react'
import './App.css'
import PokemonList from './components/card-pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 title='PokeApp'>PokeApp</h1>
      <PokemonList />
    </div>
  )
}

export default App
