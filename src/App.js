import React, { useState } from 'react';

function App() {
  { /* Exercici 1 - Sprint 7 --> creació d'un array amb les dades */ }
  const [budgetInfo, setBudgetInfo] = useState([{
      budgetText: 'Una pàgina web (500€)',
      budgetPrice: 500,
      isChecked: false
    },
    {
      budgetText: 'Una consultoria SEO (300€)',
      budgetPrice: 300,
      isChecked: false
    },
    {
      budgetText: 'Una campanya de Google Ads (200€)',
      budgetPrice: 200,
      isChecked: false
    }
  ]);

  { /* Exercici 1 - Sprint 7 --> extreure les dades dels elements triats */ }
  const getBudgetPrice = (event, index) => {
    const updatedBudgetInfo = [...budgetInfo];
    updatedBudgetInfo[index].isChecked = event.target.checked;
    setBudgetInfo(updatedBudgetInfo);
  }

  { /* Exercici 1 - Sprint 7 --> calcular el total */ }
  const getTotalBudget = budgetInfo
    .filter((item) => item.isChecked)
    .reduce((total, item) => total + item.budgetPrice, 0);

  return ( 
    <div className = "App" >
      <p>Què vols fer?</p>
      <div>
        {budgetInfo.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={(event) => getBudgetPrice(event, index)}
            />
            {item.budgetText}
          </div>
        ))}
      </div>
      <p>Preu: {getTotalBudget}€</p>
    </div>
  );
}

export default App;
