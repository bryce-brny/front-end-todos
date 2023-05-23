// import axios from 'axios'

// const todoApi = axios.create({
//     baseURL : 'http://localhost:8080'
// })

// const addToken = (token) => ({
//     headers : {
//         Authorization: `Bearer ${token}`
//     }
// })

// export const register = (input) => {
//     return todoApi.post('/auth/register', input)
// }

// export const login = (input) => {
//     return todoApi.post('/auth/login', input)
// }

// //destructure 
// // export const getMe = () => {
// //     return todoApi.get('/auth/getme',{
// //         headers : {
// //             Authorization: `Bearer ${localStorage.getItem('token')}`
// //           }
// //     })
// // }

// export const getMe = (token) => {
//     return todoApi.get('/auth/getme', addToken(token))
// }

// export const getJobs = (token) => {
//     return todoApi.get('/todos', addToken(token))
// }

// export const getSummary = (token) => {
//     return todoApi.get('/todos/summary', addToken(token))
// }

import axios from 'axios'

const todoApi = axios.create({
    baseURL : 'http://localhost:8080'
})

const addToken = (token) => ({
    headers : {
        Authorization: `Bearer ${token}`
    }
})

export const register = (input) => {
    return todoApi.post('/auth/register', input)
}

export const login = (input) => {
    return todoApi.post('/auth/login', input)
}

export const getMe = (token) => {
    return todoApi.get('/auth/getme', addToken(token))
}

export const getJobs = (token) => {
    return todoApi.get('/todos', addToken(token))
}

export const getSummary = (token) => {
    return todoApi.get('/todos/summary', addToken(token))
}

export const addJob = (input, token) => {
    return todoApi.post('/todos', input, addToken(token))
}

export const getJobById = (id, token) => {
    return todoApi.get(`/todos/${id}`, addToken(token))
}

export const updateJob = (id, input, token) => {
    return todoApi.put(`/todos/${id}`, input, addToken(token))
}

export const deleteJob = (id, token) => {
    return todoApi.delete(`/todos/${id}`, addToken(token))
}