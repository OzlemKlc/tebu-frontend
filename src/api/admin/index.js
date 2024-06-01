





import { apiAddress } from "../api_config"


function createWorker(password, phoneNumber, email, name, surname, setState)
{
    Fetch(apiAddress + "/api/Admin/create-worker", {
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
    .then(response => response.json())
    .then(data => setState(data));
}

function getStatistics(setState)
{
    Fetch(apiAddress + "/api/Admin/get-statistics", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data));
}

function getWorkers(count, pageIndex, setState)
{
    Fetch(apiAddress + "/api/Order/get-workers?count=" + count +"&pageIndex=" + pageIndex, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data));
}


export {
    createWorker,
    getStatistics,
    getWorkers
}