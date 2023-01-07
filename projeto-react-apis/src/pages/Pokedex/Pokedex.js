import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { homePage, detailsPage } from '../../route/Coordinator'
import logoPokemon from "../../assets/logoHeader.svg"
import { GlobalContext } from '../../context/GlobalContext'
import { Card, Stack, Text, Button, Image, CardBody, Heading } from '@chakra-ui/react'
import pokebola from "../../assets/pokebola.png"
import { tipoCor } from '../../components/tipoCor'
import { tipoImagem } from '../../components/tipoImagem'
import { Body, ButtonHome, HeaderContainer, CardContainer } from './Pokedex.styled'
import Modal from "react-modal"
import "./Pokedex.css";

Modal.setAppElement(`#root`)

const Pokedex = () => {


    const navigate = useNavigate()

    const context = useContext(GlobalContext)

    const { pokemonList, setPokemonList, pokedexList, setPokedexList } = context

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const removeFromPokedex = (pokemon) => {
        setPokedexList(pokedexList.filter((p) => p.name !== pokemon.name))
        openModal()
    }

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    console.log(pokedexList)

    return (
        <>
            <Modal id="modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                <Heading id="heading">Oh no! </Heading>
                <Text id="text">
                    O Pokemon foi removido da sua Pokedex!
                </Text>
            </Modal>

            <HeaderContainer>
                <ButtonHome onClick={() => homePage(navigate)}>Todos Pokémons</ButtonHome>
                <img src={logoPokemon} />
            </HeaderContainer>


            <Body>
                <h1> Meus Pokémons</h1>

                <CardContainer>
                    {pokedexList.map((pokemon) => {
                        return (
                            <>
                                <Card id="card"
                                    background={tipoCor(pokemon.types && pokemon.types[0].type.name)}
                                    backgroundImage={pokebola}>
                                    <Stack id="stackImgPokemon">
                                        <Stack>
                                            <CardBody>
                                                <Text id="txtId"> #{pokemon.id} </Text>
                                                <Text id="txtName"> {pokemon.name} </Text>

                                                <Stack id="stackTipoPokemon">
                                                    {pokemon.types && pokemon.types.map((tipo) => {
                                                        return <Image id="imgTipoPokemon"
                                                            src={tipoImagem(tipo.type.name)}
                                                        />
                                                    })}
                                                </Stack>
                                            </CardBody>
                                        </Stack>

                                        <Image
                                            id="imgPokemon"
                                            src={pokemon.sprites?.front_default}
                                            alt="imagem do pokemon" />
                                    </Stack>

                                    <Stack
                                        id="stackBtn">

                                        <Button
                                            id="btnDetalhes"
                                            onClick={() => detailsPage(navigate, pokemon.id)}>
                                            Detalhes
                                        </Button>
                                        <Button
                                            id="btnRemover"
                                            onClick={() => { removeFromPokedex(pokemon); }}>
                                            Remover
                                        </Button>
                                    </Stack>
                                </Card>
                            </>
                        )
                    })}

                </CardContainer>

            </Body>

        </>
    )
}

export default Pokedex