import React, { useState, useEffect } from 'react';
import Panell from './components/Panell/Panell';
import TitleStyle from './TitleStyle';

function App() {
  { /* Exercici 1 - Sprint 7 --> creació d'un array amb les dades */ }
  const initialBudgetInfo = [
    {
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
  ];

  const [budgetInfo, setBudgetInfo] = useState(initialBudgetInfo);
  { /* Exercici 4 - Sprint 7 --> definir el total del pressupost */ }
  const [totalBudget, setTotalBudget] = useState(() => {
    const data = localStorage.getItem('totalBudget');
    return data ? JSON.parse(data) : 0;
  });

  // const [savedLocalStorage, setSavedLocalStorage] = useState(null);

  {/* Exercici 2 - Sprint 7 --> definir els elements amb els que treballarem al component Panell */ }
  const [pageNum, setPageNum] = useState(0);
  const [languagesNum, setLanguagesNum] = useState(0);
  
  {/* Exercici 2 - Sprint 7 --> expreure la informació de Panell */ }
  const handlePageNumChange = (event) => {
    const value = parseInt(event.target.value);
    setPageNum(value); 
  };

  const handleLanguagesNumChange = (event) => {
    const value = parseInt(event.target.value);
    setLanguagesNum(value);
  };

  { /* Exercici 1 - Sprint 7 --> extreure les dades dels elements triats */ }
  const getBudgetPrice = (event, index) => {
    const updatedBudgetInfo = [...budgetInfo];
    updatedBudgetInfo[index].isChecked = event.target.checked;
    setBudgetInfo(updatedBudgetInfo);
  }

  { /* Exercici 1 - Sprint 7 --> calcular el total */ }
  { /* Exercici 2 i 3 - Sprint 7 --> calcular el total amb el extres afegits i que no s'apliqui a les altre opcions */ }
  const getTotalBudget = () =>
    budgetInfo.reduce((total, item) => {
      if (item.isChecked) {
        if (item === budgetInfo[0]) {
          return total + item.budgetPrice + pageNum * languagesNum * 30;
        } else {
          return total + item.budgetPrice;
        }
      }
    return total;
  }, 0);

  { /* Exercici 4 - Sprint 7 --> carregar les dades ja existents */ }
  useEffect(() => {
    setTotalBudget(getTotalBudget());
  }, [budgetInfo, pageNum, languagesNum]);

  useEffect(() => {
    localStorage.setItem('totalBudget', JSON.stringify(totalBudget));
  }, [totalBudget]);

  useEffect(() => {
    const data = localStorage.getItem('totalBudget');
    if (data) {
      const parsedData = JSON.parse(data);
      setTotalBudget(parsedData);
    } else {
      setTotalBudget(getTotalBudget());
    }
  }, []);

  return (
  <div className="App">
    <TitleStyle>Què vols fer?</TitleStyle>
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
            {index === 0 && item.isChecked && (
            <Panell
            pageNum={pageNum}
            languagesNum={languagesNum}
            handlePageNumChange={handlePageNumChange}
            handleLanguagesNumChange={handleLanguagesNumChange}
          />
            )}
          </div>
        </div>
      ))}
    </div>
    <p>Preu: {getTotalBudget()}€</p>
  </div>
);
}

export default App;
