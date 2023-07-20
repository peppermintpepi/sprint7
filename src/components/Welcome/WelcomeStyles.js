// Exercici 5 - Sprint 7 --> estil de la pàgina de benvinguda
import styled from 'styled-components';
import backgroundImage from '../../img/webPage.png'

const WelcomeBackground = styled.div`
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: contain;
    background-color: rgb(208, 208, 208);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {
      background-size: contain;
      background-position: top;
  }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: rem; 
    margin-top: 11rem;
    margin-right: 2rem;

    @media screen and (max-width: 768px) {
        margin-top: 4rem;
        margin-right: 1rem; 
      }
`;

const WelcomTitle = styled.h1 `
    color: rgb(28, 38, 42);
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
        max-width: 70%;
        margin-right: 0;
        text-align: right;
      }
`;

const WelcomeText = styled.p `
    color: rgb(28, 38, 42);
    text-align: right;
    max-width: 45%;
    margin-top: 2rem;
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
        max-width: 70%; 
        margin-right: 0;
      }
`;

const BoldText = styled.span `
    font-weight: bold;
`
const StartButton = styled.button `
      background-color: tomato;
      color: white;
      font-size: 1.25rem;
      border-radius: 50px;
      border: 0;
      font-weight: bold;
      padding: 1rem;
      margin-right: 3rem;
      margin-top: 2rem;

      @media screen and (max-width: 768px) {
        margin-right: 0;
        text-align: center;
      }
`

export  { WelcomeBackground, WelcomTitle, WelcomeText, ContentWrapper, BoldText, StartButton };
