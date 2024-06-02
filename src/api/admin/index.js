





import { apiAddress } from "../api_config"


function createWorker(password, phoneNumber, email, name, surname, setState)
{
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
    .then(response => response.json())
    .then(data => setState(data));
}

function getStatistics(setState)
{
    fetch(apiAddress + "/api/Admin/get-statistics", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data));
}

function getWorkers(count, pageIndex, setState)
{
    console.log("FUCK", apiAddress + "/api/Admin/get-workers?count=" + count +"&pageIndex=" + pageIndex);
    fetch(apiAddress + "/api/Admin/get-workers?count=" + count +"&pageIndex=" + pageIndex, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json() )
    .then(data => {console.log("QQQQQQQQQQQ", data); setState(data)});
}


export {
    createWorker,
    getStatistics,
    getWorkers
}