import React, {useState} from "react";
import {BorderPanell,PlusButton,LessButton} from "./PanellStyle";

// Exercici 2 - Sprint 7 --> Panell que s'obre quan es tria l'opció de pàgina web
const Panell = ({
    pageNum,
    languagesNum,
    handlePageNumChange,
    handleLanguagesNumChange,
}) => {

    {
        /* Exercici 3 - Sprint 7 --> generar el contador */ }
    const [count, setCount] = useState(0);

    const addCountPages = () => {
        setCount(count + 1);
        handlePageNumChange({target: {value: pageNum + 1}});
    };
    
    const addCountLanguages = () => {
        setCount(count + 1);
        handleLanguagesNumChange({target: {value: languagesNum + 1}});
    };

    const extractCountPages = () => {
        if (count > 1) {
            const decrementedPageNum = pageNum - 1;
            handlePageNumChange({target: {value: decrementedPageNum}});
        }
    };
    
    const extractCountLanguages = () => {
        if (count > 1) {
            const decrementedLanguageNum = languagesNum - 1;
            handleLanguagesNumChange({target: {value: decrementedLanguageNum}});
        }
    };

    return ( 
        <BorderPanell>
        <div>
        Número de pàgines
        <PlusButton onClick = {addCountPages} > + </PlusButton> 
        <input 
        type = "text"
        id = "pageNum"
        value = {pageNum}
        onChange = {handlePageNumChange}
        inputMode = "numeric"
        pattern = "[0-9]*" 
        />
        <LessButton onClick = {extractCountPages}> - </LessButton> 
        </div>
        <div>
        Número d'idiomes
        <PlusButton onClick = {addCountLanguages}> + </PlusButton> 
        <input 
        type = "text"
        id = "languagesNum"
        value = {languagesNum}
        onChange = {handleLanguagesNumChange}
        inputMode = "numeric"
        pattern = "[0-9]*" 
        />
        <LessButton onClick = {extractCountLanguages}> - </LessButton> 
        </div> 
        </BorderPanell>
    );
};

export default Panell;