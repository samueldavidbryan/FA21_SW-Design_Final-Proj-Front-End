// import React from 'react';
// import { useState } from 'react';
// // import { processResponse } from '../WebUtilities';
// import { base_url } from "../awsData";

// function AssignItemLoc() {

//   //POST: { "body" : "{ \"sku\" : \"testn10\", \"shelf\" : \"52\" , \"aisle\" : \"10\"}"}
//   var url = base_url + "assign_item_loc"; 
    
//   const [sku, setSKU] = useState("");
//   const [shelf, setShelf] = useState("");
//   const [aisle, setAisle] = useState("");
//   //const [result, setResult] = useState(-1);
//   const [result, setResult] = useState(-1);
  
//   function handleAssignItemClick(e) {

//     e.preventDefault();
//     var data = {};
//     data["sku"] = sku;
//     data["aisle"] = aisle;
//     data["shelf"] = shelf;

//     // to work   with API gateway, I need to wrap inside a 'body'
//     var body = {};
//     body["body"] = JSON.stringify(data);

//     var js = JSON.stringify(body);

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", url, true);
//     // send the collected data as JSON
//     xhr.send(js);
//     // This will process results and update HTML as appropriate.
//     xhr.onloadend = function () {
//       setResult(xhr.status)
//       // if (xhr.readyState === XMLHttpRequest.DONE) {
//       //   setResult(processResponse(xhr.responseText, xhr.status));
//       // } else {
//       //   setResult(processResponse("N/A", xhr.status));
//       // }
//     };
//   }
//   return (
//     <div>
//       <h1>Assign Item Location</h1>

//       <form onSubmit={(e) => handleAssignItemClick(e)}>
//       <input name="sku" placeholder="sku" value={sku} onChange={(e) => setSKU(e.target.value)}/>
//       <input name="shelf" placeholder="shelf" value={shelf} onChange={(e) => setShelf(e.target.value)} />
//       <input name="aisle" placeholder="aisle" value={aisle} onChange={(e) => setAisle(e.target.value)}/>
//       <input name="result" value={result===-1?"Nothing Entered":(result===200?"Success":"Error")} readOnly/>
//       <input type="submit" value="Submit"/>
//       </form>
//       <p>{result}</p>

//   </div>
//   );
// }

// export default AssignItemLoc;

import React from 'react'
import { useState } from 'react';
import { instance } from '../App.js'
//import ShowItem from './ShowItem.js';

export default function AssignItemLoc() {

    var [result, setResult] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        let sku = document.getElementById("sku").value;
        let shelf = document.getElementById("shelf").value;
        let aisle = document.getElementById("aisle").value;


        //Prepares Payload
        var data = {};
        data["sku"] = sku;  
        data["shelf"] = shelf;
        data["aisle"] = aisle;
        
        // to work   with API gateway, I need to wrap inside a 'body'
        var body = {};
        body["body"] = JSON.stringify(data);
        
        // Sends the actual POST
        instance.post('/assign_item_loc', body)
            .then(function (response) {
              setResult(JSON.stringify(response.data.result)); 
              if (JSON.stringify(response.data.statusCode) == 400) {
                setResult(JSON.stringify(response.data.error));
              }
              console.log(JSON.stringify(response.data.error))
            })
            .catch(function(error) {
                setResult(JSON.stringify(error));
            })
    }
  return (
    <div>


      <h1>Assign Item Location</h1>
      <form onSubmit={(e) => handleClick(e)}>
                <input id="sku" 
                    placeholder="SKU" />
                <input id="shelf" 
                    placeholder="Shelf" />
                <input id="aisle" 
                    placeholder="Aisle" />
                <input type="submit" value="Submit"/>
            </form>
            <p>{result}</p>
           
    </div>
  )
}
