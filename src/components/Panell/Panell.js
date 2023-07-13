import React, { useState } from "react";
import BorderPanell from "./PanellStyle";

// Exercici 2 - Sprint 7 --> Panell que s'obre quan es tria l'opció de pàgina web
const Panell = ({
    pageNum,
    languagesNum,
    handlePageNumChange,
    handleLanguagesNumChange,
  }) => {

    return (
        <BorderPanell >
            <div>
                Número de pàgines: <input 
                type="number" 
                id="pageNum"
                value={pageNum}
                onChange={handlePageNumChange}
                min={1}
                step={1}
                 />
            </div> 
            <div>
                Número de idiomes: <input 
                type="number" 
                id="languagesNum" 
                value={languagesNum}
                onChange={handleLanguagesNumChange}
                min={1}
                step={1}
                />
            </div>
        </BorderPanell>
    )
};

export default Panell;
