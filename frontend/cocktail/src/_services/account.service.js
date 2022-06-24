/** Import des modules */
import { AxiosUser } from './caller.service'
import router from '@/router'

let login = (credentials) => {
    return AxiosUser.post('/auth/login', credentials)
}

let signup = (user) => {
    return AxiosUser.put('/auth/signup', user)
}

let logout = () => {
    localStorage.removeItem('token')
    router.push('/')
}

let getToken = () => {
    return localStorage.getItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

export const accountService = {
    login, signup, logout, saveToken, getToken, isLogged
}