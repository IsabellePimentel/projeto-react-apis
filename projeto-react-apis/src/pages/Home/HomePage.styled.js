import styled from 'styled-components'

export const Header = styled.div`
	display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 400px;
    margin-bottom: 20px;
    img{
        width: 307px;
        height: 113px;
    }
    button{
        width: 287px;
        height: 74px;
        background: #33A4F5;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: white;
        border: none;
    }
`



export const Body = styled.div`
    background-color: #61626f;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const HeaderContainer = styled.div`
width: 100%;
color: #DDDDDD;
margin: 20px 0px 0px 20px;

`

