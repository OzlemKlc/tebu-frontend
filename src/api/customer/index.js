

import { apiAddress } from "../api_config"

import handle from "../error/index"

function addAddress(name, fullAddress, city, district, setState)
{
    window.setLoading(true);
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
    .then(response => {
        if(!response.ok)
            throw response
        return response.json()
    })
    .then(
        data => setState(data), 
        e => {
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}

function addVehicle(name, model, year, brand, setState)
{
    window.setLoading(true);
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
    .then(response => {
        if(!response.ok)
            throw response
        return response.json()
    })
    .then(
        data => setState(data), 
        e => {
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}

function getAddresses(setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Costumer/get-addresses", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => {
        if(!response.ok)
            throw response
        return response.json()
    })
    .then(
        data => setState(data), 
        e => {
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}

function getVehicles(setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Costumer/get-vehicles", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => {
        if(!response.ok)
            throw response
        return response.json()
    })
    .then(
        data => setState(data), 
        e => {
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}

export {
    addAddress,
    addVehicle,
    getAddresses,
    getVehicles
}