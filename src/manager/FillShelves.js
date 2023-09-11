import React from 'react'
import { useState } from 'react'; 
import {instance } from '../App';
import { store_id } from './ManagerLogin';


function FillShelves() {

// push lamdba code to have list of success list of filled items

  var [result, setResult] = useState(""); 

  const handleClick = () => {

    var data = {};
    data["store_id"] = store_id; 
    var body = {}; 
    body["body"] = JSON.stringify(data); 
  
    // Sends the POST
    instance.post('/fill_shelves', body)
      .then(function (response) {
        if (JSON.stringify(response.data.statusCode) == 200) {
          setResult(JSON.stringify(response.data.result)); 
        } else if (JSON.stringify(response.data.statusCode) == 400) {
          setResult(JSON.stringify(response.data.error));
        }
      })
      .catch(function(error) {
        setResult(JSON.stringify(error));
      })

  }

  return (
    <div>
      <h1>Fill Shelves</h1>
      <button onClick={() => handleClick()}>Fill Shelves</button>
      <p>{result}</p>
    </div>
  );
}
export default FillShelves;