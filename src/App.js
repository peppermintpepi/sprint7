import React, { useState } from 'react';
import Panell from './components/Panell/Panell';

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

  {/* Exercici 2 - Sprint 7 --> expreure la informació de Panell */ }
  const [pageNum, setPageNum] = useState(0);
  const [languagesNum, setLanguagesNum] = useState(0);

  const handlePageNumChange = (event) => {
    const value = parseInt(event.target.value);
    setPageNum(value > 0 ? value : 1);    {/* limitar el mínim a introduïr 1, el 0 (o negatius) no seran vàlids */}
  };

  const handleLanguagesNumChange = (event) => {
    const value = parseInt(event.target.value);
    setLanguagesNum(value > 0 ? value : 1);   {/* limitar el mínim a introduïr 1, el 0 (o negatius) no seran vàlids */}
  };

  { /* Exercici 1 - Sprint 7 --> extreure les dades dels elements triats */ }
  const getBudgetPrice = (event, index) => {
    const updatedBudgetInfo = [...budgetInfo];
    updatedBudgetInfo[index].isChecked = event.target.checked;
    setBudgetInfo(updatedBudgetInfo);
  }

  { /* Exercici 1 - Sprint 7 --> calcular el total */ }
  { /* Exercici 2 - Sprint 7 --> calcular el total amb el extres afegits */ }
  const getTotalBudget = () =>
    budgetInfo
      .filter((item) => item.isChecked)
      .reduce((total, item) => total + item.budgetPrice + (pageNum * languagesNum * 30), 0);

  return (
  <div className="App">
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
          {/* Exercici 2 - Sprint 7 --> Ensenyar el Panell per pantalla */}
          <div>
            {index === 0 && item.isChecked && 
            <Panell
            pageNum={pageNum}
            languagesNum={languagesNum}
            handlePageNumChange={handlePageNumChange}
            handleLanguagesNumChange={handleLanguagesNumChange}
          />
            }
          </div>
        </div>
      ))}
    </div>
    <p>Preu: {getTotalBudget()}€</p>
  </div>
);
}

export default App;
