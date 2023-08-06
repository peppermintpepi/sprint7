import React from "react";
import ClientName from "../ClientName/ClientName"; 
import BudgetName from "../BudgetName/BudgetName"; 
import { ClientInfoButton, TitleBudget, DateStyle, NewBudgetContainer } from "./ClientInfoCollectorStyles";

// Exercici 7 - Sprint 7 --> crear un array amb tota la informació que s'haurà de mostrar per pantalla
const ClientInfoCollector = ({
    clientName,
    setClientName,
    budgetName,
    setBudgetName,
    getTotalBudget,
    budgetInfo,
    generatedBudgets,
    setGeneratedBudgets, 
    pageNum,
    languagesNum,
  }) => {
    
    // console.log(generatedBudgets);

    const handleGenerateBudget = () => {
      const newBudget = {
        clientName,
        budgetName,
        numPages: pageNum,
        numLanguages: languagesNum,
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
      console.log(newBudget);
    
      setGeneratedBudgets((prevGeneratedBudgets) => [
        ...prevGeneratedBudgets,
        newBudget,
      ]);
      
      setClientName("");
      setBudgetName("");

    };
  
    return (
      <div>
          <ClientName clientName={clientName} setClientName={setClientName} />
          <BudgetName budgetName={budgetName} setBudgetName={setBudgetName} />
          <ClientInfoButton onClick={handleGenerateBudget}>
            Crear el teu pressupost
          </ClientInfoButton>

          <NewBudgetContainer>
          {generatedBudgets && generatedBudgets.length > 0 ? (
            generatedBudgets.map((budget, index) => (
              <div key={index}>
                <TitleBudget>Pressupost {index + 1}</TitleBudget>
                <p>Nom del client: {budget.clientName}</p>
                <p>Nom del pressupost: {budget.budgetName}</p>
                <p>Pressupost total: {budget.totalBudget}€</p>
                <h4>Què vol contractar</h4>
                {budget.budgetInfo.map((item, idx) => (
                  item.isChecked ? (
                    <div key={idx}>
                      {item.budgetText}
                      {idx === 0 ? (
                        <>
                          <p>Número de pàgines: {pageNum}</p>
                          <p>Número d'idiomes: {languagesNum}</p>
                        </>
                      ) : null}
                    </div>
                  ) : null
                ))}
                <DateStyle>Data de creació: {budget.createdAt}</DateStyle>
            </div>
            ))
        ) : (
            <p>No hi ha informació disponible.</p>
        )}
        </NewBudgetContainer>

      </div>
  );
};

export default ClientInfoCollector;
