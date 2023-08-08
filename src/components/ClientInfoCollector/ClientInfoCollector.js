import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ClientName from "../ClientName/ClientName"; 
import BudgetName from "../BudgetName/BudgetName"; 
import { ClientInfoButton, TitleBudget, DateStyle, NewBudgetContainer, OrderButton } from "./ClientInfoCollectorStyles";

// Exercici 7 - Sprint 7 --> crear un array amb tota la informació que s'haurà de mostrar per pantalla
const ClientInfoCollector = ({
    clientName,
    setClientName,
    budgetName,
    setBudgetName,
    getTotalBudget,
    budgetInfo,
    pageNum,
    languagesNum,
    generatedBudgets,
    setGeneratedBudgets,
  }) => {

    // Exercici 8 - Sprint 7 --> accions per a ordenar els newBudget
    const [sortBy, setSortBy] = useState('default');
    const [sortOrder, setSortOrder] = useState('asc');
    const [originalOrder, setOriginalOrder] = useState([]);

    const handleGenerateBudget = () => {
      const createdAt = new Date().toLocaleString('ca-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    
      console.log("Creating budget with createdAt:", createdAt);
    
      const newBudget = {
        id: uuidv4(),
        clientName,
        budgetName,
        numPages: pageNum,
        numLanguages: languagesNum,
        totalBudget: getTotalBudget(),
        createdAt: createdAt,
        budgetInfo: budgetInfo.map((item) => ({ ...item })),
      };
    
      console.log("New budget:", newBudget);
    
      setGeneratedBudgets((prevGeneratedBudgets) => [
        ...prevGeneratedBudgets,
        newBudget,
      ]);
    
      // Exercici 8 - Sprint 7 --> tornar a l'ordre original
      setOriginalOrder((prevOriginalOrder) => [
        ...prevOriginalOrder,
        newBudget.id,
      ]);

      setClientName("");
      setBudgetName("");
    };

    // Exercici 8 - Sprint 7 --> ordenar per nom del pressupost
    const handleSortByName = () => {
      setSortBy('budgetName');
      setSortOrder('asc');
      setGeneratedBudgets((prevGeneratedBudgets) =>
        [...prevGeneratedBudgets].sort((a, b) =>
          a.budgetName.localeCompare(b.budgetName)
        )
      );
    };
    
    // Exercici 8 - Sprint 7 --> ordenar per data de creació
    const handleSortByDate = () => {
      setSortBy('createdAt');
      setSortOrder('asc');
      setGeneratedBudgets((prevGeneratedBudgets) =>
        [...prevGeneratedBudgets].sort((a, b) =>
          a.createdAt.localeCompare(b.createdAt)
        )
      );
    };

    // Exercici 8 - Sprint 7 --> restaurar l'ordre original
    const handleRestoreOrder = () => {
      setSortBy('default');
      setSortOrder('asc');
      setGeneratedBudgets((prevGeneratedBudgets) => {
        const sortedBudgets = [...prevGeneratedBudgets];
    
        sortedBudgets.sort((a, b) =>
          originalOrder.indexOf(a.id) - originalOrder.indexOf(b.id)
        );
    
        return sortedBudgets;
      });
    };

    return (
      <div>
          <ClientName clientName={clientName} setClientName={setClientName} />
          <BudgetName budgetName={budgetName} setBudgetName={setBudgetName} />
          <ClientInfoButton onClick={handleGenerateBudget}>
            Crear el teu pressupost
          </ClientInfoButton>

          <NewBudgetContainer>
          {generatedBudgets && generatedBudgets.length >= 0 ? (
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
         <div>
          <OrderButton onClick={handleSortByName}>Ordenar per nom</OrderButton>
          <OrderButton onClick={handleSortByDate}>Ordenar per data</OrderButton>
          <OrderButton onClick={handleRestoreOrder}>Restaurar</OrderButton>
        </div>
        </NewBudgetContainer>

      </div>
  );
};

export default ClientInfoCollector;
