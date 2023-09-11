import React from 'react'
import { useState } from 'react'; 
import {instance } from '../App';
import { store_id } from './ManagerLogin';

function ShowMissingItems() {

  var [result, setResult] = useState(""); 

  const handleClick = () => {

    var data = {};
    data["store_id"] = store_id; 
    
    var body = {}; 
    body["body"] = JSON.stringify(data); 


    // Sends the POST
    instance.post('/missing_items', body)
      .then(function (response) {

        setResult(JSON.stringify(response.data.result)); 
      })
      .catch(function(error) {
        setResult(error);
      })
  }

  return (
    <div>
      <h1>Show Missing Items</h1>
      <button onClick={() => handleClick()}>Missing Items</button>
      <p>{result}</p>
    </div>
  );

}
export default ShowMissingItems;
