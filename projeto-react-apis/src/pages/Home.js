import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Home() {

    const context = useContext(GlobalContext)
    const { pokemonList } = context

    console.log(pokemonList)
    return (
        <>
            <Header />

            <div><h1>Todos Pokemons</h1></div>



        </>
    );
}

export default Home