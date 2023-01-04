import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import logoHeader from "../assets/logoHeader.svg"
import { Header, Body  } from './HomePage.styled'
import { pokedexPage } from '../route/Coordinator'
import { useNavigate } from 'react-router-dom'
import CardComponent from '../components/CardComponent.js'

function Home() {

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { pokemonList } = context

    console.log(pokemonList)
    return (
        <>
            <Header>
                <img src={logoHeader} alt="Pokemon" />
                <button onClick={() => pokedexPage(navigate)}>Pokedéx</button>
            </Header>


            <Body>
                {pokemonList.map((item) => {
                    return (
                        <CardComponent key={item} pokemon={item}  />
                    )
                })}
            </Body>

        </>
    );
}

export default Home