
import { useState, useEffect} from 'react'
import axios from "axios";
import { GlobalContext } from './context/GlobalContext';
import { GlobalStyle } from './GlobalStyle';
import Router from "./route/Router"

function App() {

  const [pokemonListTodos, setPokemonListTodos] = useState([])
  const [pokemonList, setPokemonList] = useState([])
  const [pokedexList, setPokedexList] = useState([])

  const obterPokemons = async () => {

    try {
      const URL_BASE = "https://pokeapi.co/api/v2/pokemon?limit=21";
      const response = await axios.get(`${URL_BASE}`);

      setPokemonList(response.data.results)
      setPokemonListTodos(response.data.results)
    } catch (error) {
      console.log(`Erro ao obter lista de pokemons.`)
      console.log(error)
    }

  }

  useEffect(()=>{
    obterPokemons()
  },[])




  const context = {
    pokemonList,
    setPokemonList,
    pokedexList,
    setPokedexList,
    obterPokemons,
    pokemonListTodos,
    setPokemonListTodos
  }


  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
