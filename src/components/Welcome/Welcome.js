// Exercici 5 - Sprint 7 --> components de la pàgina de benvinguda
import React from "react";
import { Link } from 'react-router-dom';
import { WelcomeBackground, WelcomTitle, WelcomeText, ContentWrapper, BoldText, StartButton } from "./WelcomeStyles";

function Welcome() {
    return (
      <WelcomeBackground>
        <ContentWrapper>
        <WelcomTitle>Calcula el teu pressupost</WelcomTitle>
        <WelcomeText>A aquesta aplicació podràs obtenir el pressupost per a crear la teva pròpia pàgina web. Només has d'escollir entre les diverses opcions que t'oferim i <BoldText>al moment tindràs el pressupost!</BoldText></WelcomeText>
        <Link to='/budget'>
          <StartButton>Demana el teu pressupost</StartButton>
        </Link>
        </ContentWrapper>
      </WelcomeBackground>
    );
  }

export default Welcome;
