import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import logoPokemon from "../../assets/logoHeader.svg"
import {homePage } from '../../route/Coordinator'
import { GlobalContext } from '../../context/GlobalContext'
import { Card, Stack, Text, Heading, Image , Flex } from '@chakra-ui/react'
import { tipoCor } from '../../components/tipoCor'
import { tipoImagem } from '../../components/tipoImagem'
import { ButtonHomePage,ModalInfo, FlexBaseStats, StackTotal, ButtonRemovePokedex, Body, HeaderContainer, BarStats, DisplayBaseStats} from './Detalhes.styled'
import "./Detalhes.css";


const Detalhes = () => {


    const navigate = useNavigate()

    const path = useParams()

    const context = useContext(GlobalContext)

    const { pokedexList, setPokedexList } = context

    const [modalIsOpen, setModalIsOpen] = useState(false)



    const [detailsPokemon, setDetailsPokemon] = useState({})


    const removeFromPokedex = (pokemon) => {
        setPokedexList(pokedexList.filter((p) => p.name !== pokemon.name))
        openModal()
    }

    const obterPokemonPorId = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${path.id}`)
            setDetailsPokemon(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obterPokemonPorId()
    }, [])


    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    const totalStats = () => {
        return detailsPokemon.stats?.reduce(
            (total, currentItem) => total = total + currentItem.base_stat, 0);
    }

    function exibeBotaoRemover() {
        const arrNomes = pokedexList.map((item) => item.name)
        if (arrNomes.includes(detailsPokemon.name)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>


            <ModalInfo
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                <h1>Oh no! </h1>
                <Text >
                    O Pokemon foi removido da sua Pokedex!
                </Text>
            </ModalInfo>

            <HeaderContainer>
                <ButtonHomePage onClick={() => homePage(navigate)}>Todos Pokémons</ButtonHomePage>
                <img src={logoPokemon} alt="logo Pokemon" />

                {
                exibeBotaoRemover() 
                    ? <ButtonRemovePokedex onClick={() => removeFromPokedex(detailsPokemon)}>Excluir da Pokedéx</ButtonRemovePokedex>
                    : <div></div>
                }

            </HeaderContainer>


            <Body>
            <h1> Detalhes</h1>
              
                <Card id="card3"                   
                    background={tipoCor(detailsPokemon.types && detailsPokemon.types[0].type.name)} >
                    <Flex id="flex">
                        <Image id="imgPokemonFront"
                            src={detailsPokemon.sprites?.front_default}
                            alt="imagem do pokemon" />
                        <Image id="imgPokemonBack"
                            src={detailsPokemon.sprites?.back_default}
                            alt="imagem do pokemon" />
                    </Flex>
                    <FlexBaseStats id="flex2" >
                        <Heading>Base Stats</Heading>
                        <DisplayBaseStats  >
                            {detailsPokemon.stats?.map((stats) => {
                                return (<>
                                    <Text >{stats.stat.name}: <b> {stats.base_stat} </b>                                    
                                    <BarStats stats={stats.base_stat}><div/></BarStats>                             
                                    </Text>
                                </>)
                            })}
                        </DisplayBaseStats>
                        <StackTotal  >
                            <Text>Total: </Text>
                            <b> {totalStats()}</b>
                        </StackTotal>
                    </FlexBaseStats>
                    <Flex id="flex5" >
                        <Text id="txtid">
                            #{path.pokemonId}
                        </Text>
                        <Text id="txtnome">
                            {detailsPokemon.name}
                        </Text>
                        <Stack id="stack6">
                            {detailsPokemon.types && detailsPokemon.types.map((tipo) => {
                                return <Image id="imgTIpo" src={tipoImagem(tipo.type.name)}  />
                            })}
                        </Stack>
                        <Stack id="stack7">
                            <Heading>Moves:</Heading>
                            {detailsPokemon.moves?.map((movesPokemon, index) => {
                                if (index < 5) {
                                    return <Text id="txtMoves">{movesPokemon.move.name}</Text>
                                }
                            })}
                        </Stack>
                    </Flex>
                    <Flex>
                        <Image id="imgPoke"                          
                            src={detailsPokemon.sprites?.front_default}
                            alt="imagem do pokemon"
                        />
                    </Flex>
                </Card>
            </Body>

        </>
    );

}

export default Detalhes