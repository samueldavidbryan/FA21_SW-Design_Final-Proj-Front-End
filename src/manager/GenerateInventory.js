import React from 'react';
import { useState } from 'react';
import {instance } from '../App';
import { base_url } from '../awsData';
import { processResponse } from '../WebUtilities';
import { store_id } from './ManagerLogin';

function GenerateInventory() {

  
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
  instance.post('/generate_inventory', body)
      .then(function (response) {
        if (JSON.stringify(response.data.statusCode) == 200) {
          console.log("generate inventory response");
          console.log(JSON.stringify(response))
          setResult(JSON.stringify(response.data.result));
        } else {
          setResult(JSON.stringify(response.data.error));
        }
      })
      .catch(function(error) {
          setResult(error);
      })
    }

  return (
    <div>
        <h1>Generate Inventory Report</h1>
        <button onClick={handleClick()}>Generate Inventory Report</button>
        <p>{result}</p>
    </div>
  );
}





//   // POST: {"body" : "{ \"store_id\" : \"1234\"}"}
//   var url = base_url + "generate_inventory"; 
  
//   const [statusCode, setStatusCode] = useState(-1);
//   const [inventory, setInventory] = useState([]);

//   function handleClick(e) {
   
//     e.preventDefault();
//     var data = {};
//     data["store_id"] = store_id;
    
//     // to work with API gateway, I need to wrap inside a 'body'
//     var body = {};
//     body["body"] = JSON.stringify(data);

//     var js = JSON.stringify(body);

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", url, true);
//     // send the collected data as JSON
//     xhr.send(js);
//     // This will process results and update HTML as appropriate.
//     xhr.onloadend = function () {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         setStatusCode(processResponse(xhr.responseText, xhr.status));
//         parseInventory(xhr.responseText, xhr.status);
//         console.log(inventory);
//       } else {
//         setInventory("No inventory report or trouble generating report.");
//         setStatusCode(processResponse("N/A", xhr.status));
//       }
//     }

//     function parseInventory(response, status) {
      
//       var js = JSON.parse(response);
//       var result  = js["result"];

//       if (status === 200) {
//         setInventory(JSON.stringify(result)); 
//       }
//       else {
//         setInventory("No inventory report or trouble generating report.");
//       }
//     }
//   }

//   return (
//     <div>
    
//     <h1>Inventory</h1>
//     <form onSubmit={(e) => handleClick(e)}>
//       <input name="statusCode" value={statusCode===-1?"Nothing Entered":(statusCode===200?"Success":"Error")} readOnly/>
//       <input type="submit" value="Submit"/>
//     </form>
//     <p>{JSON.stringify(inventory)}</p>
//   </div>
//   );
// }

export default GenerateInventory;