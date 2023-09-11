import { instance } from '../App';
import { useState } from 'react';

function ItemsInAisleShelf() {

    var [result, setResult] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        //Prepares Payload
        var data = {};
        data["store_id"] = document.getElementById("store_id").value;
        data["aisle"] = document.getElementById("aisle").value;
        data["shelf"] = document.getElementById("shelf").value;
        
        // to work   with API gateway, I need to wrap inside a 'body'
        var body = {};
        body["body"] = JSON.stringify(data);
        
        // Sends the actual POST
        instance.post('/aisle_shelf_item', body)
            .then(function (response) {
                setResult(JSON.stringify(response.data));
            })
            .catch(function(error) {
                setResult(error);
            })
    }

    return(

        <div>
            <h1>List Items on Aisle/Shelf</h1>
            <form onSubmit={(e) => handleClick(e)}> 
                <input id="store_id" 
                    placeholder="Store ID" />
                <input id="aisle" 
                    placeholder="Aisle" />
                <input id="shelf" 
                    placeholder="Shelf" />
                <input type="submit" value="Submit"/>
            </form>
            <p>{result}</p>
        </div>
    );
}

export default ItemsInAisleShelf;