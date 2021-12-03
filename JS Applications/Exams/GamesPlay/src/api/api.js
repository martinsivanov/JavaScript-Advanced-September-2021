import { getUserData, setUserData, clearUserData } from "../util.js";

let host = 'http://localhost:3030';

async function request(url, options) {
    try {
        let response = await fetch(host + url, options);

        if (response.ok == false) {
            let error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return await response.json();
        }

        // try {
        //     return await response.json();
        // } catch (err) {
        //     return response;
        // }

    } catch (err) {
        alert(err.message);
        throw new Error(err.message);
    }
}

function createOptions(method = 'get', data) {
    let options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    let userData = getUserData();
    if (userData) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions())
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    let result = await post('/users/login', { email, password });

    let userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };

    setUserData(userData);

    return result;
}

export async function register(email, password) {
    let result = await post('/users/register', { email, password });

    let userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };

    setUserData(userData);

    return result;
}

export async function logout() {
    get('/users/logout');
    clearUserData();
}