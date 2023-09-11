import React from 'react';
import { useState } from 'react';
import {instance } from '../App';
// import { base_url } from '../awsData';
// import { processResponse } from '../WebUtilities';


function ProcessShipment() {
  // POST: { "body":["{ \"sku\" : \"1\", \"store_id\" : \"1234\", \"quantity\" : \"100\" }",
      // "{ \"sku\" : \"34\",  \"store_id\" : \"1934\", \"quantity\" : \"100\"  }"]}
      
  var [result, setResult] = useState(""); 
  var [status, setStatus] = useState("-1"); 
  var [shipment, setShipment] = useState("");

  function handleClick(e) {
    e.preventDefault();
  
    // Sends the POST
    instance.post('/processShipment', shipment)
      .then(function (response) {
        console.log("process Shipment");
        console.log(JSON.stringify(response))
        if (JSON.stringify(response.data.statusCode) == 200) {
          setResult(JSON.stringify(response.data.result)); 
          setStatus(200);
        } else if (JSON.stringify(response.data.statusCode) == 400) {
          setResult(JSON.stringify(response.data.error));
          setStatus(400);
        }
        if (JSON.stringify(response.data.error)) {
          setStatus(400);
          setResult(JSON.stringify(response.data.result)+" Error: "+JSON.stringify(response.data.error));
        }
        
      })
      .catch(function(error) {
        setResult(JSON.stringify(error));
      })

  }
  return (
    <div>
      <h1>Process Shipment</h1>
      <form onSubmit={(e) => handleClick(e)}>
        <textarea id="name" value={shipment} onChange={(e) => setShipment(e.target.value)}rows="4" columns="50"></textarea>
        <input name="status" value={status==-1?"Nothing Entered":(status==200?"Success":"Error")} readOnly/>
        <input type="submit" value="Submit"/>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default ProcessShipment;