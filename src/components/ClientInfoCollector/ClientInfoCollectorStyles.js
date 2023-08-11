import styled from 'styled-components';

const ClientInfoButton = styled.button `
    border: 0px;
    background-color: tomato;
    border-radius: 50px;
    color: white;
    padding: 1rem;
    margin-left: 1rem;
    margin-top: 1.5rem;
    font-size: 1em;
    font-weight: bold;
`

const OrderButton = styled.button `
    border: 0px;
    border-radius: 25px;
    padding: 1rem;
    margin: 1rem;
`
const TitleBudget = styled.h3 `
    color: tomato;
`
const DateStyle = styled.p `
    font-size: 0.75rem;
    text-align: right;
`

const NewBudgetContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1 rem;
    margin-left: 0;
    flex: 1;
    position: fixed;
    top: 75px;
    left: 50%;
    max-height: 90vh; 
    overflow-y: auto; 
    max-width: 90%;

    @media (max-width: 1000px) {
        display: block;
        position: relative;
        align-items: right;
        top: auto; 
        left: 0; 
        transform: none; 
        max-height: none; 
        overflow-y: auto; 
        margin-top: 2rem;
    }
`

export { ClientInfoButton, TitleBudget, DateStyle, NewBudgetContainer, OrderButton };
