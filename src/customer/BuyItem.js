import React from 'react'
import { useState } from 'react';
import { instance } from '../App.js'
import ShowItem from './ShowItem.js';

export default function BuyItem() {

    var [result, setResult] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        let sku = document.getElementById("sku-2").value;
        let store_id = document.getElementById("store_id").value;
        let quantity = document.getElementById("quantity").value;


        //Prepares Payload
        var data = {};
        data["sku"] = sku;  
        data["store_id"] = store_id;
        data["quantity"] = quantity;
        
        // to work   with API gateway, I need to wrap inside a 'body'
        var body = {};
        body["body"] = JSON.stringify(data);
        
        // Sends the actual POST
        instance.post('/buy_item', body)
            .then(function (response) {
                setResult(JSON.stringify(response.data.result));
            })
            .catch(function(error) {
                setResult(error);
            })
    }
  return (
    <div>

      <ShowItem />

      <h1>Buy Item</h1>
      <form onSubmit={(e) => handleClick(e)}>
                <input id="store_id" 
                    placeholder="Store ID" />
                <input id="sku-2" 
                    placeholder="SKU" />
                <input id="quantity" 
                    placeholder="Quantity" />
                <input type="submit" value="Submit"/>
            </form>
            <p>{result}</p>
    </div>
  )
}
