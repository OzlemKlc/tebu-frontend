

import { apiAddress } from "../api_config"


function createOrder(orderType, vehicleId, addressId, orderNote, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Order/create-order", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            orderType,
            vehicleId,
            addressId,
            orderNote
        })
    })
    .then(response => response.json())
    .then(data => setState(data))
    .then(() => window.setLoading(false));
}

function getCustomerOrders(count, pageIndex, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Order/get-customer-orders?count=" + count +"&pageIndex=" + pageIndex, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data))
    .then(() => window.setLoading(false));
}

function getWorkerOrders(count, pageIndex, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Order/get-worker-orders?count=" + count +"&pageIndex=" + pageIndex, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data))
    .then(() => window.setLoading(false));
}


function changeOrderStatus(orderId, orderStatus, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Order/change-status", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            orderId,
            orderStatus
        })
    })
    .then(response => response.json())
    .then(data => setState(data))
    .then(() => window.setLoading(false));
}

export {
    createOrder,
    getCustomerOrders,
    getWorkerOrders,
    changeOrderStatus
}