import React, { useState } from "react";
import Panell from "../Panell/Panell";
import TitleStyle from "../../TitleStyle";
import ClientInfoCollector from '../ClientInfoCollector/ClientInfoCollector';

const Budget = ({
    budgetInfo: initialBudgetInfo,
    pageNum,
    languagesNum,
    handlePageNumChange,
    handleLanguagesNumChange,
    handleOpenPopupPages,
    handleOpenPopupLanguages,
    getTotalBudget,
}) => {
  { /* Exercici 7 - Sprint 7 --> netejar els checkbox quan s'afegeix un botó */ }
  const [localBudgetInfo, setLocalBudgetInfo] = useState(initialBudgetInfo);

  const handleCheckboxChange = (event, index) => {
    const updatedBudgetInfo = [...localBudgetInfo];
    updatedBudgetInfo[index].isChecked = event.target.checked;
    setLocalBudgetInfo(updatedBudgetInfo);
  };

  return (
    <>
      <TitleStyle>Què vols fer?</TitleStyle>
      <div>
        {localBudgetInfo.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={(event) => handleCheckboxChange(event, index)}
            />
            {item.budgetText}
            <div>
              {index === 0 && item.isChecked && (
                <Panell
                  pageNum={pageNum}
                  languagesNum={languagesNum}
                  handlePageNumChange={handlePageNumChange}
                  handleLanguagesNumChange={handleLanguagesNumChange}
                  handleOpenPopupPages={handleOpenPopupPages}
                  handleOpenPopupLanguages={handleOpenPopupLanguages}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <p>Preu: {getTotalBudget()}€</p>

    </>
  );
};

export default Budget;
