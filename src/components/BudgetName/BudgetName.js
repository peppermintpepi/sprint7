import React from "react";


// Exercici 7 - Sprint 7
const BudgetName = ({ budgetName, setBudgetName }) => {

    const handleBudgetNameChange = (event) => {
        setBudgetName(event.target.value);
    };

    return (
        <div>
          <label>Nom del pressupost: </label>
          <input type="text" value={budgetName} onChange={handleBudgetNameChange} />
        </div>
      );
    };

export default BudgetName;
