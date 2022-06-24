/** Import des modules */
import { AxiosData } from './caller.service'

let getAllCocktails = () => {
    return AxiosData.get('/cocktails')
}

let getCocktail = (id) => {
    return AxiosData.get('/cocktails/'+id)
}

let createCocktail = (cocktail) => {
    return AxiosData.put('/cocktails', cocktail)
}

let updateCocktail = (cocktail, id) => {
    return AxiosData.patch('/cocktails/'+id, cocktail)
}

let deleteCocktail = (id) => {
    return AxiosData.delete('/cocktails/'+id)
}

export const cocktailService = {
    getAllCocktails, getCocktail, createCocktail, deleteCocktail, updateCocktail
}