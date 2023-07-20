import React, {useState, useEffect} from "react";
import { BorderPanell, PlusButton, LessButton } from "./PanellStyle";
import Information from "../Information/Information";
import { InformationButtonPages, InformationButtonLanguages } from "../Information/InformationStyles.js";

// Exercici 2 - Sprint 7 --> Panell que s'obre quan es tria l'opció de pàgina web
const Panell = ({
    pageNum,
    languagesNum,
    handlePageNumChange,
    handleLanguagesNumChange,
}) => {

    { /* Exercici 3 - Sprint 7 --> generar el contador */ }
    const [count, setCount] = useState(0);

    useEffect(() => {
      setCount(pageNum + languagesNum);
    }, [pageNum, languagesNum]);

    const addCountPages = () => {
      const incrementedCount = count + 1;
      setCount(incrementedCount);
      handlePageNumChange({ target: { value: pageNum + 1 } });
    };
  
    const addCountLanguages = () => {
      const incrementedCount = count + 1;
      setCount(incrementedCount);
      handleLanguagesNumChange({ target: { value: languagesNum + 1 } });
    };

    const extractCountPages = () => {
      console.log(count);
        if (count > 1) {
            const decrementedPageNum = pageNum - 1;
            setCount(count - 1);
            handlePageNumChange({target: {value: decrementedPageNum}});
        }
    };

    const extractCountLanguages = () => {
      console.log(count);
        if (count > 1) {
            const decrementedLanguageNum = languagesNum - 1;
            setCount(count - 1);
            handleLanguagesNumChange({target: {value: decrementedLanguageNum}});
        }
    };

    // Exercici 6 - Sprint 7 --> props del botó
    const [isPagesActive, setPagesIsActive] = useState(false);
    const [isLanguagesActive, setLanguagesIsActive] = useState(false);

    const handleOpenPopupPages = () => {
        setPagesIsActive(true);
        console.log(isPagesActive);
    };
    
    const handleOpenPopupLanguages = () => {
        setLanguagesIsActive(true);
        console.log(isLanguagesActive);
    }
    
    const handleClosePopup = () => {
        setPagesIsActive(false);
        setLanguagesIsActive(false);
    }

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
          <InformationButtonPages onClick={handleOpenPopupPages}>i</InformationButtonPages>
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
          <InformationButtonLanguages onClick={handleOpenPopupLanguages}>i</InformationButtonLanguages>
          </div> 

          { /* Exercici 6 - Sprint 7 --> Botons d'informació actius */ }
          {isPagesActive && <Information 
            onClose={handleClosePopup}
            text={pageNum === 0 ? `En aquest moment el web que ens sol·licita no estaria compost per cap pàgina extra.` :
            pageNum === 1 ? `En aquest moment el web que ens sol·licita estaria compost per ${pageNum} pàgina extra.` :
            `En aquest moment el web que ens sol·licita estaria compost per ${pageNum} pàgines.`}
          />}
          {isLanguagesActive && <Information 
            onClose={handleClosePopup} 
            text={languagesNum === 0 ? `En aquest moment el web que ens sol·licita no estaria compost per cap idioma extra.`: 
            languagesNum === 1 ? `En aquest moment el web que ens sol·licita estaria compost per ${languagesNum} idioma extra.` :
            `En aquest moment el web que ens sol·licita estaria compost per ${languagesNum} idiomes diferents.`}
          />}

        </BorderPanell>
    );
};

export default Panell;
