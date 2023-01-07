import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import logoHeader from "../../assets/logoHeader.svg"
import { Header, Body  } from './HomePage.styled'
import { pokedexPage } from '../../route/Coordinator'
import { useNavigate } from 'react-router-dom'
import CardComponent from '../../components/CardComponent/CardComponent.js'
import {HeaderContainer } from './HomePage.styled'

function Home()  {

    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    const { pokemonList, pokedexList, setPokedexList, setPokemonList, obterPokemons, pokemonListTodos} = context
  

    useEffect(()=>{
        const arrNomes = pokedexList.map((item) => item.name)
        setPokemonList(pokemonListTodos.filter(x => !arrNomes.includes(x.name)))
      },[])

      
    return (
        <>
            <Header>
                <img src={logoHeader} alt="Pokemon" />
                <button onClick={() => pokedexPage(navigate)}>Pokédex</button>
            </Header>

            <Body>
                <HeaderContainer> <h1>Todos Pokémons</h1> </HeaderContainer> 
                
                {pokemonList.map((item) => {
                    return (
                        <CardComponent key={item.name} pokemon={item} pokemonList={pokemonList}  setPokemonList={setPokemonList} pokedex={pokedexList} setPokedex={setPokedexList} />
                    )
                })}
            </Body>

        </>
    );
}

export default Home