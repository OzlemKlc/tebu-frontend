

import { apiAddress } from "../api_config"
import handle from "../error/index"


function login(phone, password, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/session/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            phone: phone,
            password: password
        })
    })
    .then(response => {
        if(!response.ok)
            throw response
        return response.json()
    })
    .then(
        data => setState(data.user), 
        e => {
            e.json().then(data => handle(data));
        })
    .finally(() => window.setLoading(false));
}

function logout(setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/session/logout", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => {
        if(!response.ok)
            throw response
        return null;
    })
    .then(
        data => setState(null), 
        e => {
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}

function getCurrentUser(setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/session/current-user", {
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
        data => setState(data.user), 
        e => {
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}


function register(password, phone, email, name, surname, setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/session/register", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            phoneNumber: phone,
            password: password,
            email: email,
            name: name,
            surname: surname
        })
    })
    .then(response => {
        if(!response.ok)
            throw response
        return response.json()
    })
    .then(
        data => setState(data.user), 
        e => {
            e.json().then(data => handle(data));
        })
    .then(() => window.setLoading(false));
}

export {
    login,
    logout,
    getCurrentUser,
    register
}