

import { apiAddress } from "../api_config"


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
    .then(response => response.json())
    .then(data => setState(data.user))
    .then(() => window.setLoading(false));
}

function logout(setState)
{
    window.setLoading(true);
    fetch(apiAddress + "/api/session/logout", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type":"application/json" }
    })
    .then(data => setState(null))
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
    .then(response => response.json())
    .then(data => setState(data.user))
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
    .then(response => response.json())
    .then(data => setState(data.user))
    .then(() => window.setLoading(false));
}

export {
    login,
    logout,
    getCurrentUser,
    register
}