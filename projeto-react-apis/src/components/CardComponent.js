import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Card, Text, Stack, Image, CardBody } from '@chakra-ui/react'
import { tipoImagem } from './tipoImagem'
const CardComponent = (props) => {


  const [details, setDetails] = useState({})

  useEffect(() => {
    buscarDetalhes()
  }, [])

  const buscarDetalhes = async () => {
    try {
      const response = await axios.get(`${props.pokemon.url}`)
      setDetails(response.data)
      console.log("AQUI")
      console.log(props.pokemon)
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <Card
        variant='outline'
        width={"380px"}
        margin={"40px"}
        border={"none"}
      >
        <Stack
          display={"flex"}
          flexDirection={"row"}
        >
          <Stack>

            <CardBody>
              <Text
                fontSize={'16px'}
                color={"white"}
              >
                #{details.id}
              </Text>

              <Text
                textTransform={"capitalize"}
                fontSize={'28px'}
                color={"white"}
              >
                {details.name}
              </Text>
              <Stack display={"flex"} flexDirection={"row"} alignItems={"flex-end"}>
                {details.types && details.types.map((tipo) => {
                  console.log(tipo)
                  return <Image
                    src={tipoImagem(tipo.type.name)}
                    padding={"5px"}
                    width={"100px"}
                    height={"40px"}
                    marginTop={"20px"}
                  />
                })}
              </Stack>
            </CardBody>
          </Stack>

          <Image
            position={"absolute"}
            w={"193px"}
            h={"193px"}
            bottom={"80px"}
            right={"12px"}
            src={details.sprites?.front_default}
            alt="imagem do pokemon"

          />
        </Stack>




      </Card>
    </>
  )
}

export default CardComponent