

import { apiAddress } from "../api_config"


function addAddress(name, fullAddress, city, district, setState)
{
    Fetch(apiAddress + "/api/Costumer/add-address", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            name, 
            fullAddress, 
            city, 
            district
        })
    })
    .then(response => response.json())
    .then(data => setState(data));
}

function addVehicle(name, model, year, brand, userId, setState)
{
    Fetch(apiAddress + "/api/Costumer/add-address", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            name, 
            model, 
            year, 
            brand, 
            userId
        })
    })
    .then(response => response.json())
    .then(data => setState(data));
}

function getAddresses(setState)
{
    Fetch(apiAddress + "/api/Costumer/get-addresses", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data));
}

function getVehicles(setState)
{
    Fetch(apiAddress + "/api/Costumer/get-vehicles", {
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