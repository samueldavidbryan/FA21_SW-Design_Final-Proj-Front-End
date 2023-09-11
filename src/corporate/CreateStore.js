import React from 'react';
import { useState } from 'react';
import { processResponse } from '../WebUtilities';
import { base_url } from "../awsData";
import UserPool from '../utilities/ManagerUserPool';

function CreateStore() {

  //POST: {"body" : "{ \"id\" : \"MoonNum7\", \"longitude\" : \"42.001\" , \"latitude\" : \"42.002\"}"}
  var create_store_url = base_url + "create_store"; 
    
  const [id, setID] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [result, setResult] = useState(-1);

  function handleCreateStoreClick(e) {

      e.preventDefault();

      var data = {};
      data["id"] = id;
      data["longitude"] = longitude;
      data["latitude"] = latitude;
      const password = "password";

      // to work   with API gateway, I need to wrap inside a 'body'
      var body = {};
      body["body"] = JSON.stringify(data);

      var js = JSON.stringify(body);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", create_store_url, true);
      // send the collected data as JSON
      xhr.send(js);
      // This will process results and update HTML as appropriate.
      xhr.onloadend = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          setResult(processResponse(xhr.responseText, xhr.status));
        } else {
          setResult(processResponse("N/A", xhr.status));
        }
        
      };
      
      UserPool.signUp(id, password, [], null, (err, data) => {
        if (err) {
            console.error(err);
        }

        console.log(data);
      });
  }

  
  
  return (
    <div>
      <h1>Create Store</h1>

    <form onSubmit={(e) => handleCreateStoreClick(e)}>
    <input name="id" placeholder="id" value={id} onChange={(e) => setID(e.target.value)}/>
    <input name="longitude" placeholder="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
    <input name="latitude" placeholder="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}/>
    <input name="result" value={result===-1?"Nothing Entered":(result===200?"Success":"Error")} readOnly/>
    <input type="submit" value="Submit"/>
    </form>

  </div>
  );
}

export default CreateStore;