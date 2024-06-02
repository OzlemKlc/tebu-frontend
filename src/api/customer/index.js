

import { apiAddress } from "../api_config"


function addAddress(name, fullAddress, city, district, setState)
{
    fetch(apiAddress + "/api/Costumer/add-address", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            name: name, 
            fullAdress: fullAddress, 
            city: city, 
            district: district
        })
    })
    .then(response => response.json())
    .then(data => setState(data));
}

function addVehicle(name, model, year, brand, setState)
{
    fetch(apiAddress + "/api/Costumer/add-vehicle", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            name: name, 
            model: model, 
            year: year, 
            brand: brand
        })
    })
    .then(response => {console.log(response); return response.json();})
    .then(data => setState(data));
}

function getAddresses(setState)
{
    console.log("AAAAAAAAAAAAEEEEE",setState)
    fetch(apiAddress + "/api/Costumer/get-addresses", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data));
}

function getVehicles(setState)
{
    fetch(apiAddress + "/api/Costumer/get-vehicles", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data));
}

export {
    addAddress,
    addVehicle,
    getAddresses,
    getVehicles
}