





import { apiAddress } from "../api_config"


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
    .then(response => response.json())
    .then(data => setState(data))
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
    .then(response => response.json())
    .then(data => setState(data))
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
    .then(response => response.json() )
    .then(data => {console.log("QQQQQQQQQQQ", data); setState(data)})
    .then(() => window.setLoading(false));
}


export {
    createWorker,
    getStatistics,
    getWorkers
}