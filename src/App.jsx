import Pokedex from './Pokedex'
import pokemons from './data'
import Pokegame from './Pokegame'
import './App.css'

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      {/* <Pokedex pokemons={pokemons}/> */}
      <Pokegame pokemons={pokemons}/>
    </>
  )
}
export default App
