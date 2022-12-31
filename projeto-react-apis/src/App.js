
import { useState, useEffect } from 'react'
import axios from "axios";
import { GlobalContext } from './context/GlobalContext';
import { GlobalStyle } from './GlobalStyle';
import Router from "./route/Router"

function App() {

  const [pokemonList, setPokemonList] = useState([])

  const context = {
    pokemonList,
    setPokemonList
  }

  useEffect(()=>{
    obterPokemons()
  },[])

  const obterPokemons = async () => {

    try {
      const URL_BASE = "https://pokeapi.co/api/v2/pokemon";
      const response = await axios.get(`${URL_BASE}`);

      setPokemonList(response.data.results)

      console.log(`Lista de pokemons obtida com sucesso!`)
      console.log(response);
    } catch (error) {
      console.log(`Erro ao obter lista de pokemons.`)
      console.log(error)
    }

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
