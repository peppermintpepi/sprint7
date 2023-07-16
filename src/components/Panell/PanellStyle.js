import styled from 'styled-components';

/* Exercici 2 - Sprint 7 --> estil del panell per a triar idiomes i pàgines que tindrà el web */
const BorderPanell = styled.div `
     display: inline-block;
     border: 5px solid tomato;
     border-radius: 25px;
     margin-left: 2rem;
     margin-top: 1rem;
     margin-bottom: 1rem;
     padding: 1.5rem;
`

const PlusButton = styled.button `
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    border: none;
    background-color: tomato;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`

const LessButton = styled.button `
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    border: none;
    background-color: tomato;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
`

export {BorderPanell, PlusButton, LessButton};
