import React from 'react';
import { useState } from 'react';
import { instance } from '../App';
import { store_id } from './ManagerLogin';

function GenerateOverstockReport() {

  var [result, setResult] = useState("");

  const handleClick = () => {
//   e.preventDefault();

  //Prepares Payload
  var data = {};
  data["store_id"] = store_id;
  
  // to work   with API gateway, I need to wrap inside a 'body'
  var body = {};
  body["body"] = JSON.stringify(data);
  
  // Sends the actual POST
  instance.post('/generate_overstock', body)
      .then(function (response) {
        if (JSON.stringify(response.data.statusCode) == 200) {
          console.log("generate overstock response")
          console.log(JSON.stringify(response))
          setResult(JSON.stringify(response.data.result));
        } else {
          setResult("No Overstock report or error generating report")
        }
      })
      .catch(function(error) {
          setResult(error);
      })
    }

  return (
    <div>
        <h1>Generate Overstock Report</h1>
        <button onClick={handleClick()}>Generate Overstock</button>
        <p>{result}</p>
    </div>
  );
}

export default GenerateOverstockReport;