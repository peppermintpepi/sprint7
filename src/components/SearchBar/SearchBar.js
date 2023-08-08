import React, { useState } from "react";
import { SearchButton, CancelSearchButton } from "./SearchBarStyles";

// Exercici 9 - Sprint 7 --> generar una barra de búsqueda entre el pressupostost generats
const SearchBar = ({ setSearchText, generatedBudgets, setShowErrorMessage }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputText = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        console.log(searchTerm);
        setSearchText(searchTerm);
    
        const existsInGeneratedBudgets = generatedBudgets.some(
          budget => budget.budgetName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setShowErrorMessage(!existsInGeneratedBudgets);
      };

    const handleCancelSearch = () => {
        setSearchTerm('');
        setSearchText('');
        setShowErrorMessage(false);
    }

    return (
        <div>
            <input type="text" placeholder="Busca pel nom del pressupost" onChange={handleInputText}/>
            <SearchButton onClick={handleSearch}>Buscar</SearchButton>
            <CancelSearchButton onClick={handleCancelSearch}>Calcel·la la búsqueda</CancelSearchButton>
        </div>
    );
};

export default SearchBar;
