<template>
    <div>
        <h1>Edition d'un cocktail</h1>
        <form @submit.prevent="edit">
       
            <input type="text" id="cocktail_id" v-model="cocktail.id" hidden/>
     
            <div class="formGroup">
                <label for="cocktail_name">Nom</label>
                <input type="text" id="cocktail_name" v-model="cocktail.nom"/>
            </div>
            <div class="formGroup">
                <label for="cocktail_description">Description</label>
                <input type="text" id="cocktail_description" v-model="cocktail.description"/>
            </div>
            <div class="formGroup">
                <label for="cocktail_recette">Recette</label>
                <input type="text" id="cocktail_recette" v-model="cocktail.recette"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Modifier</button>
            </div>
        </form>
    </div>
</template>
<script>
import { cocktailService } from '@/_services'
export default {
    name: 'CocktailEdit',
    props: ['id'],
    data(){
        return{
            cocktail: {}
        }
    },
    methods: {
        edit(){
            cocktailService.updateCocktail(this.cocktail, this.id)
                .then(res => this.$router.push({name: 'cList'}))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        cocktailService.getCocktail(this.id)
            .then(res => this.cocktail = res.data.data)
            .catch(err => console.log(err))
    },
}
</script>