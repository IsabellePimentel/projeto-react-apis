import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    padding-right: 480px;
    img{
        width: 307px;
        height: 113px;
    }
`

export const ButtonHome = styled.button`
    background-color: transparent;
    color: black;
    text-decoration: underline;
    font-weight: bold;
    border: none;
    font-size: 24px;
`
export const Body = styled.div`
    background-color: #61626f;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    height: max-content;

    justify-content: space-around;
`


export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
