

import { apiAddress } from "../api_config"


function login(phone, password, setState)
{
    fetch(apiAddress + "/api/session/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            phone: phone,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => setState(data.user));
}

function logout(setState)
{
    fetch(apiAddress + "/api/session/logout", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(data => setState(null));
}

function getCurrentUser(setState)
{
    fetch(apiAddress + "/api/session/current-user", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(response => response.json())
    .then(data => setState(data.user));
}


function register(password, phone, email, name, surname, setState)
{
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
    .then(response => response.json())
    .then(data => setState(data.user));
}

export {
    login,
    logout,
    getCurrentUser,
    register
}