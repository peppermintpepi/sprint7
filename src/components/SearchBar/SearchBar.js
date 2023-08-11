import React, { useState } from "react";
import { SearchButton, CancelSearchButton, StyledInput } from "./SearchBarStyles";

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
            <StyledInput type="text" placeholder="Busca pel pressupost" onChange={handleInputText}/>
            <SearchButton onClick={handleSearch}>Buscar</SearchButton>
            <CancelSearchButton onClick={handleCancelSearch}>Calcel·la</CancelSearchButton>
        </div>
    );
};

export default SearchBar;
