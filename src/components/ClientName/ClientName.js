import React from "react";

// Exercici 7 - Sprint 7
const ClientName = ({ clientName, setClientName }) => {

    const handleClientNameChange = (event) => {
        setClientName(event.target.value);
    };

    return (
        <div>
          <label>Nom del client: </label>
          <input type="text" value={clientName} onChange={handleClientNameChange} />
        </div>
      );
};

export default ClientName;
