import React from "react";
import { Link } from "react-router-dom";
import Panell from "../Panell/Panell";
import TitleStyle from "../../TitleStyle";
import Information from "../Information/Information";

const Budget = ({
    budgetInfo,
    pageNum,
    languagesNum,
    handlePageNumChange,
    handleLanguagesNumChange,
    handleOpenPopupPages,
    handleOpenPopupLanguages,
    getBudgetPrice,
    getTotalBudget
}) => {
    return (
        <>
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
