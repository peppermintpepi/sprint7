import styled from 'styled-components';

const SearchButton = styled.button `
    border: 0px;
    border-radius: 25px;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 1rem;
`

const CancelSearchButton = styled.button `
    border: 0px;
    border-radius: 25px;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 1rem;
    background-color: tomato;
    color: white;
`

const ErrorMessageContainer = styled.div `
    background-color: white;
    border: 0.5rem solid tomato;
    border-radius: 25px;
    padding: 2rem;
    color: rgb(38, 38, 38);
`

const ErrorMessageBG = styled.div `
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

export { SearchButton, CancelSearchButton, ErrorMessageContainer, ErrorMessageBG };