





import { apiAddress } from "../api_config"

import handle from "../error/index"

function createWorker(password, phoneNumber, email, name, surname, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Admin/create-worker", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            password, 
            phoneNumber, 
            email, 
            name, 
            surname
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
            console.log("bbbbb", e);
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}

function getStatistics(setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Admin/get-statistics", {
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
            console.log("bbbbb", e);
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}

function getWorkers(count, pageIndex, setState)
{
    window.setLoading(true);
    console.log("FUCK", apiAddress + "/api/Admin/get-workers?count=" + count +"&pageIndex=" + pageIndex);
    fetch(apiAddress + "/api/Admin/get-workers?count=" + count +"&pageIndex=" + pageIndex, {
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
            console.log("bbbbb", e);
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}


export {
    createWorker,
    getStatistics,
    getWorkers
}