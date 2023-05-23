import axios from 'axios'

const todoApi = axios.create({
    baseURL : 'http://localhost:8080'
})

export const register = (input) => {
    return todoApi.post('/auth/register', input)
}

export const login = (input) => {
    return todoApi.post('/auth/login', input)
}

export const getMe = () => {
    return todoApi.get('/auth/getme',{
        headers : {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
    })
}