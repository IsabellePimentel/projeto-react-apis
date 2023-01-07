import styled from 'styled-components'
import Modal from 'styled-react-modal'


export const ButtonHomePage = styled.button`

    background-color: transparent;
    font-weight: bold;
    font-size: 24px;
    text-decoration: underline;
    border: none;
    
`
export const DisplayBaseStats = styled.div`
border-radius: 12px;

background-color: white;
margin-bottom: 5px;
margin-top: 15px;
p{
    margin-bottom: 5px;

    text-transform: capitalize;
    display: flex;
    text-align: right;
    justify-content: space-between;
    font-weight: 400;
    width: 300px;
    

}
`

export const BarStats = styled.div`
border-radius: 8px;
float: left;
height: 10px;
width: 150px;
display: flex;

margin-left: 5px;
div {
    float: left;
    border: 1px solid ${props => props.stats < 50 ? 'red' :props.stats < 99? 'orange':'#73AC31'};
    width: ${props => (props.stats/100)*100}%;
    background-color: ${props => props.stats < 50 ? '#FF7B2E' :props.stats < 99? '#FFDD69':'#B5E61D'};
    border-radius: 8px;
    height: 100%;
    
}
`

export const ButtonRemovePokedex = styled.button`
    width: 226px;
    height: 57px;
    background: #FF6262;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: white;
    border: none;
`


export const Body = styled.div`
    background-color: #61626f;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    height: max-content;

    justify-content: space-around;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    
    padding: 20px;
    margin-bottom: 20px;
    img{
        width: 307px;
        height: 113px;
    }
`

export const StackTotal= styled.div`
display: flex;
    flex-direction: row;
    align-items: flex-end;

`

export const FlexBaseStats= styled.div `
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: white;

height: 600px;
margin: 20px;
padding: 20px;
`

export const ModalInfo = Modal.styled`
width: 20vw;
height: 20vh;
margin: 0 auto;

p {
    text-align: center;
    font-weight: bold;
}

`
