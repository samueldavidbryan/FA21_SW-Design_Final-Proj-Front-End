import { instance } from '../App';
import { useState } from 'react';

function ListStores() {

    var latitude = {};
    var longitude = {};

    var [result, setResult] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        latitude = document.getElementById("latitude").value;
        longitude = document.getElementById("longitude").value;

        //Prepares Payload
        var data = {};
        data["latitude"] = latitude;  
        data["longitude"] = longitude;
        
        // to work   with API gateway, I need to wrap inside a 'body'
        var body = {};
        body["body"] = JSON.stringify(data);
        
        // Sends the actual POST
        instance.post('/cus_list_stores', body)
            .then(function (response) {
                setResult(JSON.stringify(response.data.result));
            })
            .catch(function(error) {
                setResult(error);
            })
    }

    return(

        <div>
             <form onSubmit={(e) => handleClick(e)}>
                
                <input name="latitude" 
                    id="latitude" 
                    placeholder="Latitude" />
                <input id="longitude" 
                    placeholder="Longitude" />
                <input type="submit" value="Submit"/>
            </form>
            <p>{result}</p>
        </div>
    );
}

export default ListStores;