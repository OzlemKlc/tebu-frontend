

import { apiAddress } from "../api_config"
import handle from "../error/index"


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

function getCustomerOrders(count, pageIndex, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Order/get-customer-orders?count=" + count +"&pageIndex=" + pageIndex, {
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

function getWorkerOrders(count, pageIndex, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/Order/get-worker-orders?count=" + count +"&pageIndex=" + pageIndex, {
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
    createOrder,
    getCustomerOrders,
    getWorkerOrders,
    changeOrderStatus
}