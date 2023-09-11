// import React from 'react';
// import { useState } from 'react';
// import { instance } from '../App'

// function RemoveStore() {
//   const [statusCode, setStatusCode] = useState(-1);

//   const handleClick = (e) => {
//     e.preventDefault();

//     //Prepares Payload
//     var data = {};
//     data["store_id"] = document.getElementById("id").value;
    
//     // to work   with API gateway, I need to wrap inside a 'body'
//     var body = {};
//     body["body"] = JSON.stringify(data);
    
//     // Sends the actual POST
//     instance.post('/remove_store', body)
//       .then(function (response) {
//           setStatusCode(response.status)
//       })
//       .catch(function(error) {
//           setStatusCode(error);
//       })
//   }
  
//   return (
//     <div>
//       <h1>Remove Store</h1>
//       <form onSubmit={(e) => handleClick(e)}>
//       <input id="id" placeholder="Store ID" />
//       <input name="result" value={statusCode===-1?"Nothing Entered":(statusCode===200?"Success":"Error")} readOnly/>
//       <input type="submit" value="Submit"/>
//       </form>
//     </div>
    
//   );
// }

// export default RemoveStore;

import React from 'react'
import { useState } from 'react';
import { instance } from '../App.js'
//import ShowItem from './ShowItem.js';

export default function AssignItemLoc() {

    var [result, setResult] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        let store_id = document.getElementById("store_id").value;


        //Prepares Payload
        var data = {};
        data["store_id"] = store_id;  
        
        // to work   with API gateway, I need to wrap inside a 'body'
        var body = {};
        body["body"] = JSON.stringify(data);
        
        // Sends the actual POST
        instance.post('/remove_store', body)
            .then(function (response) {
              if (response.data.statusCode === 400) {
                setResult(JSON.stringify(response.data.error));
              } else{
                setResult(JSON.stringify("Removed store successfully")); 
              }
              //setResult(JSON.stringify(response.data.result)); 
              //console.log(JSON.stringify(response.data.statusCode))
              console.log(JSON.stringify(response.data.error))
              //console.log(JSON.stringify(response.data.error.length))
              //console.log(JSON.stringify(response.data.error))
            })
            .catch(function(error) {
                setResult(JSON.stringify(error));
            })
    }
  return (
    <div>


      <h1>Remove Store</h1>
      <form onSubmit={(e) => handleClick(e)}>
                <input id="store_id" 
                    placeholder="Store ID" />
                <input type="submit" value="Submit"/>
            </form>
            <p>{result}</p>
           
    </div>
  )
}
