import bug from "../assets/tipos/bug.png"
import dark from "../assets/tipos/dark.png"
import dragon from "../assets/tipos/dragon.png"
import electric from "../assets/tipos/eletric.png"
import fairy from "../assets/tipos/fairy.png"
import fighting from "../assets/tipos/fighting.png"
import fire from "../assets/tipos/fire.png"
import flying from "../assets/tipos/flying.png"
import ghost from "../assets/tipos/ghost.png"
import grass from "../assets/tipos/grass.png"
import ground from "../assets/tipos/ground.png"
import ice from "../assets/tipos/ice.png"
import normal from "../assets/tipos/normal.png"
import poison from "../assets/tipos/poison.png"
import psychic from "../assets/tipos/psychic.png"
import rock from "../assets/tipos/rock.png"
import steel from "../assets/tipos/steel.png"
import water from "../assets/tipos/water.png"

export const tipoImagem = (tipo) => {
    switch (tipo){
      case "bug":
        return bug
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }}