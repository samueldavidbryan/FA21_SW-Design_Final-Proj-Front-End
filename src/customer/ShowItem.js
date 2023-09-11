import React from 'react'
import { instance } from '../App';
import { useState } from 'react';

export default function ShowItem() {

    var sku = {};

    var [result, setResult] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        sku = document.getElementById("sku").value;

        //Prepares Payload
        var data = {};
        data["sku"] = sku;  
        
        // to work   with API gateway, I need to wrap inside a 'body'
        var body = {};
        body["body"] = JSON.stringify(data);
        
        // Sends the actual POST
        instance.post('/show_item', body)
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    setResult(JSON.stringify(response.data.result));
                } else if (response.data.statusCode === 400 ) {
                    setResult(JSON.stringify(response.data.error));
                }
            })
            .catch(function(error) {
                setResult(error);
            })
    }
  return (
    <div>
            <h2>Get information about an item:</h2>
             <form onSubmit={(e) => handleClick(e)}>
                <input id="sku" 
                    placeholder="SKU" />
                <input type="submit" value="Submit"/>
            </form>
            <p>{result}</p>
    </div>
  )
}
