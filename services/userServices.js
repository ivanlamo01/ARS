import axios from "axios";

const API = "http://localhost:4000";

export async function login(data){
    return fetch (`${API}/users/login`,{   
        method:"POST",
        headers:{
            'Content-Type': "application/json",
        },
        body:JSON.stringify(data)
    })
    .then((res)=> res.json())
}

export const registerRequest = user => axios.post(`${API}/users`,user)

