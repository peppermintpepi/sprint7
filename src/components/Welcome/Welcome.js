// Exercici 5 - Sprint 7 --> components de la pàgina de benvinguda
import React from "react";
import { Link } from 'react-router-dom';
import { WelcomeBackground, WelcomTitle, WelcomeText, WelcomeContainer, BoldText, StartButton } from "./WelcomeStyles";

function Welcome() {
    return (
      <WelcomeBackground>
        <WelcomeContainer>
        <WelcomTitle>Calcula el teu pressupost</WelcomTitle>
        <WelcomeText>A aquesta aplicació podràs obtenir el pressupost per a crear la teva pròpia pàgina web. Només has d'escollir entre les diverses opcions que t'oferim i <BoldText>al moment tindràs el pressupost!</BoldText></WelcomeText>
        <Link to='/budget'>
          <StartButton>Demana el teu pressupost</StartButton>
        </Link>
        </WelcomeContainer>
      </WelcomeBackground>
    );
  }

export default Welcome;
