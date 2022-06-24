<template>
    <div>
        <h1>Liste des cocktails</h1>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Recette</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cocktail, index) in cocktails" :key="cocktail.id">
                    <td><span class="del_btn" @click="del(index)">X</span></td>
                    <td>{{ cocktail.id }}</td>
                    <td class="edit" @click="goEdit(cocktail.id)">{{ cocktail.nom }}</td>
                    <td>{{ cocktail.description }}</td>
                    <td>{{ cocktail.recette }}</td>
                    <td><img :src= cocktail.imageUrl ></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { cocktailService } from '@/_services'
export default {
    name: 'CocktailIndex',
    data() {
        return {
            cocktails: []
        }
    },
    mounted() {
        cocktailService.getAllCocktails()
            .then(res => this.cocktails = res.data.data)
            .catch(err => console.log(err))
    },
    methods: {
        goEdit(uid){
            this.$router.push({name: 'cEdit', params:{id:uid}})
        },
        del(index) {
            cocktailService.deleteCocktail(this.cocktails[index].id)
                .then(res => this.cocktails.splice(index, 1))
                .catch(err => console.log(err))
        }

    },
}
</script>
<style>
    table{
        width:100%;
    }
    .edit{
        cursor: pointer;
    }
    .edit:hover{
        font-weight: bold;
    }
    .del_btn{
        cursor: pointer;
        color:red;
    }
</style>