import React from 'react';
import { useState, useEffect } from 'react';
import { instance } from '../App';

function ListStores() {

  const [result, setResult] = useState("");

  const handleClick = () => {
    
    // e.preventDefault();

    // Sends the actual POST
    instance.post('/corp_list_stores')
        .then(function (response) {
            setResult(JSON.stringify(response.data.result));
        })
        .catch(function(error) {
            setResult(error);
        })

  }
  
  return (
    <div>
      <h1>List Stores</h1>
      <button onClick={handleClick()}>List Stores</button>
      <p>{result}</p>
    </div>
    
  );
}

export default ListStores;