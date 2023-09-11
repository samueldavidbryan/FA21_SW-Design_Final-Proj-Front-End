import React from 'react';
import { useState } from 'react';
import { base_url } from '../awsData';
import { processResponse } from '../WebUtilities';

function CreateItem() {

  // POST: { "body" : "{ \"sku\" : \"1234\", \"name\" : \"Mop\" , \"descriptions\" : \"\" , \"price\" : \"\" , \"max_quantity_per_shelf\" : \"50\", \"shelf\" : \"\" , \"aisle\" : \"\"}"}
  var create_item_url = base_url + "create_item"; 
  
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [maxNumOnShelf, setMaxNumOnShelf] = useState("");
  const [aisle, setAisle] = useState("");
  const [shelf, setShelf] = useState("");
  const [result, setResult] = useState(-1);

  function handleCreateItemClick(e) {
   
    e.preventDefault();
    var data = {};
    data["sku"] = sku;
    data["name"] = name;
    data["descriptions"] = description;
    data["price"] = price;
    data["max_quantity_per_shelf"] = maxNumOnShelf;
    data["shelf"] = shelf;
    data["aisle"] = aisle;
    

    // to work with API gateway, I need to wrap inside a 'body'
    var body = {};
    body["body"] = JSON.stringify(data);

    var js = JSON.stringify(body);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", create_item_url, true);
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
  }
  
  return (
    <div>
    <h1>Create Item</h1>

    <form onSubmit={(e) => handleCreateItemClick(e)}>
    <input name="sku" placeholder="sku" value={sku} onChange={(e) => setSku(e.target.value)}/>
    <input name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
    <input name="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
    <input name="price" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
    <input name="maxNumOnShelf" placeholder="Max number on shelf" value={maxNumOnShelf} onChange={(e) => setMaxNumOnShelf(e.target.value)}/>
    <input name="aisle" placeholder="Aisle" value={aisle} onChange={(e) => setAisle(e.target.value)}/>
    <input name="shelf" placeholder="Shelf" value={shelf} onChange={(e) => setShelf(e.target.value)}/>
    <input name="result" value={result===-1?"Nothing Entered":(result===200?"Success":"Error")} readOnly/>
    <input type="submit" value="Submit"/>
    </form>

  </div>
  );
}

export default CreateItem;