import React from 'react';
import { useState, useEffect } from 'react'; 
import {instance } from '../App';


function TotalInventory() {

  const [result, setResult] = useState(""); 

  const handleClick = () => {

    // Sends the POST
    instance.post('/corp_generate_inventory')
      .then(function (response) {
        setResult(JSON.stringify(response.data.result)); 
      })
      .catch(function(error) {
        setResult(error);
      })
  }

  return (
    <div>
      <h1>Total Inventory</h1>
      <button onClick={handleClick()}>Generate Inventory Report</button>
      <p>{result}</p>
    </div>
  );
}

export default TotalInventory;