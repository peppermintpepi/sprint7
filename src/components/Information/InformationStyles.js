import styled from 'styled-components';

const InformationBackground = styled.div `
    background-color: rgba(38, 38, 38, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InformationButtonPages = styled.button `
    background-color: rgb(208, 208, 208);
    border-radius: 100px;
    width: 2rem;
    height: 2rem;
    border: 0;
    color: white;
    font: serif;
    font-weight: bold;
`
const InformationButtonLanguages = styled.button `
    background-color: rgb(208, 208, 208);
    border-radius: 100px;
    width: 2rem;
    height: 2rem;
    border: 0;
    color: white;
    font: serif;
    font-weight: bold;
`
const InformationContainer = styled.div `
    background-color: white;
    border: 0.5rem solid tomato;
    border-radius: 25px;
    padding: 2rem;
    color: rgb(38, 38, 38);
`

export { InformationBackground, InformationButtonPages, InformationButtonLanguages, InformationContainer };
