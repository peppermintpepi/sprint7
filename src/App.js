import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Welcome from './components/Welcome/Welcome';
import Budget from './components/Budget/Budget';
import ClientInfoCollector from './components/ClientInfoCollector/ClientInfoCollector';
import ClientName from './components/ClientName/ClientName';
import BudgetName from './components/BudgetName/BudgetName';
import { ClientInfoButton } from './components/ClientInfoCollector/ClientInfoCollectorStyles';

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

function App({handleOpenPopupLanguages, handleOpenPopupPages}) {

  const [budgetInfo, setBudgetInfo] = useState(initialBudgetInfo);
  { /* Exercici 4 - Sprint 7 --> definir el total del pressupost */ }
  const [totalBudget, setTotalBudget] = useState(() => {
    const data = localStorage.getItem('totalBudget');
    return data ? JSON.parse(data) : 0;
  });

  {/* Exercici 2 - Sprint 7 --> definir els elements amb els que treballarem al component Panell */ }
  const [pageNum, setPageNum] = useState(0);
  const [languagesNum, setLanguagesNum] = useState(0);

  { /* Exercici 7 - Sprint 7 --> definir el ClientName i BudgetName */ }
  const [clientName, setClientName] = useState('');
  const [budgetName, setBudgetName] = useState('');
  
  { /* Exercici 7 - Sprint 7 --> crear un state pels pressupostos generats i una funció que manipuli el botó */ }
  const [generatedBudgets, setGeneratedBudgets] = useState([]);
  const [budgetGenerated, setBudgetGenerated] = useState(false);

  const resetBudgetInfo = () => {
    setBudgetInfo(initialBudgetInfo);
  };

  const handleGenerateBudget = () => {
    const newBudget = {
      id: uuidv4(),
      clientName,
      budgetName,
      totalBudget: getTotalBudget(),
      createdAt: new Date().toLocaleString('ca-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      budgetInfo: budgetInfo.map((item) => ({ ...item })),
    };

    setGeneratedBudgets((prevGeneratedBudgets) => [
      ...prevGeneratedBudgets,
      newBudget,
    ]);

    setBudgetGenerated(true); 

    setClientName("");
    setBudgetName("");
    resetBudgetInfo(); 
  };

  const handleCheckboxChange = (event, index) => {
    const updatedBudgetInfo = [...budgetInfo];
    updatedBudgetInfo[index].isChecked = event.target.checked;
    setBudgetInfo(updatedBudgetInfo);
  };

  useEffect(() => {
    console.log(generatedBudgets);
  }, [generatedBudgets]);
  
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

  { /* Exercici 5 - Sprint 7 --> rounting per a inicialitzar l'aplicació */ }
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/budget"
            element={
              <Budget
                budgetInfo={budgetInfo}
                pageNum={pageNum}
                languagesNum={languagesNum}
                handlePageNumChange={handlePageNumChange}
                handleLanguagesNumChange={handleLanguagesNumChange}
                handleOpenPopupPages={handleOpenPopupPages}
                handleOpenPopupLanguages={handleOpenPopupLanguages}
                getBudgetPrice={getBudgetPrice}
                getTotalBudget={getTotalBudget}
                setBudgetInfo={setBudgetInfo}
              />
            }
          />
        </Routes>

        { /* Exercici 7 - Sprint 7 --> afegir inputs i crear un botó per a generar el pressupost */ }
        {!budgetGenerated && (
          <>
            <ClientName clientName={clientName} setClientName={setClientName} />
            <BudgetName budgetName={budgetName} setBudgetName={setBudgetName} />

            <ClientInfoButton onClick={() => {
              handleGenerateBudget();
              setBudgetGenerated(true);
            }}>
              Crear el teu pressupost
            </ClientInfoButton>
          </>
        )}

        {generatedBudgets.length > 0 && (
          <ClientInfoCollector
            clientName={clientName}
            setClientName={setClientName}
            budgetName={budgetName}
            setBudgetName={setBudgetName}
            getTotalBudget={getTotalBudget}
            budgetInfo={budgetInfo}
            generatedBudgets={generatedBudgets}
            setGeneratedBudgets={setGeneratedBudgets}
            pageNum={pageNum}
            languagesNum={languagesNum}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
