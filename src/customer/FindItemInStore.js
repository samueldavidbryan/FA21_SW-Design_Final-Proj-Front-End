import { instance } from '../App';
import { useState } from 'react';
import Select from 'react-select'
import BuyItem from './BuyItem';

function FindItemInStore() {

    var latitude = {};
    var longitude = {};

    var [searchType, setSearchType] = useState("sku");
    var [searchTerm, setSearchTerm] = useState("");
    var [result, setResult] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        latitude = document.getElementById("latitude").value;
        longitude = document.getElementById("longitude").value;

        //Prepares Payload
        var data = {};
        data["latitude"] = latitude;  
        data["longitude"] = longitude;
        data[searchType] = searchTerm;
        
        // to work   with API gateway, I need to wrap inside a 'body'
        var body = {};
        body["body"] = JSON.stringify(data);
        
        // Sends the actual POST
        instance.post('/find_item_in_store', body)
            .then(function (response) {
                setResult(JSON.stringify(response.data.result));
            })
            .catch(function(error) {
                setResult(error);
            })
    }

    const selectOptions = [
        { value: 'sku', label: 'sku' },
        { value: 'name', label: 'Name' },
        { value: 'description', label: 'Description'}
   ]

    return(

        <div>
             <form onSubmit={(e) => handleClick(e)}>
                <Select
                    isClearable={false}
                    isSearchable={false}
                    defaultInputValue='sku'
                    className='react-select'
                    classNamePrefix='select'
                    options={selectOptions}
                    onChange={(choice) => setSearchType(choice.value)}
                />
                <input id={searchType} 
                    placeholder={searchType} 
                    value={searchTerm} type="text" 
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                <p>{searchType}</p>
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

export default FindItemInStore;