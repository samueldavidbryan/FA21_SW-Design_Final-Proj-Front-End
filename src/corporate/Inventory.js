import React from 'react';
import { useState } from 'react';
import { instance } from '../App';

function Inventory() {

  var [result, setResult] = useState("");

  const handleClick = (e) => {
  e.preventDefault();

  var storeID = document.getElementById("storeID").value;

  //Prepares Payload
  var data = {};
  data["store_id"] = storeID;  
  
  // to work   with API gateway, I need to wrap inside a 'body'
  var body = {};
  body["body"] = JSON.stringify(data);
  
  // Sends the actual POST
  instance.post('/generate_inventory', body)
      .then(function (response) {
          setResult(JSON.stringify(response.data.result));
      })
      .catch(function(error) {
          setResult(error);
      })
    }

  return (
    <div>
    <h1>Inventory</h1>
    <form onSubmit={(e) => handleClick(e)}>
      <input  id="storeID" 
          placeholder="Store ID" />
      <input type="submit" value="Submit"/>
    </form>
        <p>{result}</p>
    </div>
  );
}

export default Inventory;