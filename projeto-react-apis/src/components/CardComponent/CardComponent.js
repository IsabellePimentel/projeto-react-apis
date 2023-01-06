import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Card, Stack, Text, Button, Image, CardBody, Heading } from '@chakra-ui/react'
import { tipoImagem } from '../tipoImagem'
import { tipoCor } from '../tipoCor'
import { detailsPage } from '../../route/Coordinator.js'
import { useNavigate } from 'react-router-dom'
import pokebola from "../../assets/pokebola.png"
import Modal from "react-modal"
import './CardComponent.css';

Modal.setAppElement(`#root`)

const CardComponent = (props) => {

  const [details, setDetails] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const navigate = useNavigate()

  const buscarDetalhes = async () => {
    try {
      const response = await axios.get(`${props.pokemon.url}`)
      setDetails(response.data)

    }
    catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    buscarDetalhes()
  }, [])


  const capturar = (details) => {
    props.setPokedex([...props.pokedex, details])
    openModal()
  }

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  function removerPoke(pokemonname) {
    props.setPokemonList(props.pokemonList.filter((p) => p.name != pokemonname))
  }


  return (
    <>
      <Modal
        id="modal2"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterClose={() => removerPoke(details.name)}>
        <Heading id="heading2">
          Gotcha!
        </Heading>
        <Text id="text2">
          O Pokemon foi adicionado a sua Podedex!
        </Text>
      </Modal>


      <Card id="card2"
        background={tipoCor(details.types && details.types[0].type.name)}
        backgroundImage={pokebola}>
        <Stack id="stackImgPokemon">
          <Stack>
            <CardBody>
              <Text id="txtId2"> #{details.id} </Text>
              <Text id="txtName2"> {details.name} </Text>
              <Stack id="stackTipoPokemon">
                {
                  details.types && details.types.map((tipo) => {
                    return <Image
                      id="imgTipoPokemon2"
                      key={tipo.type.name}
                      src={tipoImagem(tipo.type.name)}
                      paddingLeft={"15px"}
                      marginTop={"20px"}
                    />
                  })
                }
              </Stack>
            </CardBody>
          </Stack>

          <Image
            id="imgPokemon2"
            src={details.sprites?.front_default}
            alt="imagem do pokemon" />

        </Stack>

        <Stack
          id="stackBtn2">
          <Button
            id="btnDetalhes2"
            onClick={() => detailsPage(navigate, details.id)}>
            Detalhes
          </Button>
          <Button
            id="btnCapturar2"
            onClick={() => { capturar(details); }}>
            Capturar!
          </Button>
        </Stack>
      </Card>
    </>
  )
}

export default CardComponent