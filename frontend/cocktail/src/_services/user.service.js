/** Import des modules */
import { AxiosData } from './caller.service'

let getAllUsers = () => {
    return AxiosData.get('/users')
}

let getUser = (id) => {
    return AxiosData.get('/users/'+id)
}

let updateUser = (user, id) => {
    return AxiosData.patch('/users/'+id, user)
}

let deleteUser = (id) => {
    return AxiosData.delete('/users/'+id)
}

export const userService = {
    getAllUsers, getUser, deleteUser, updateUser
}