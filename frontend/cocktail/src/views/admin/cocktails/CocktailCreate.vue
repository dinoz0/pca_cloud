<template>
    <div>
        <h1>Création d'un cocktail</h1>

        <form @submit.prevent="ajout">
            <div class="formGroup">
                <label for="c_nom">Nom</label>
                <input type="text" id="c_nom" v-model="cocktail.nom" />
            </div>
            <div class="formGroup">
                <label for="c_description">Description</label>
                <input type="text" id="c_description" v-model="cocktail.description" />
            </div>
            <div class="formGroup">
                <label for="c_recette">Recette</label>
                <input type="text" id="c_recette" v-model="cocktail.recette" />
            </div>
            <div class="formGroup">
                <label for="c_image">Image</label>
                <input id="c_image" type="file" @change="imgUpload"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Créer le Cocktail</button>
            </div>
        </form>
    </div>
</template>
<script>
import { cocktailService } from '@/_services'
export default {
    name: 'CocktailCreate',
    data() {
        return {
            cocktail: {
                nom: '',
                description: '',
                recette: ''
            },
            image:''
        }
    },
    methods: {
        imgUpload(e){
            this.image = e.target.files[0]
        },
        ajout() {
            let formData = new FormData()
            if(this.image !== ''){
                formData.append('file', this.image)
            }
            
            formData.append('nom', this.cocktail.nom)
            formData.append('description', this.cocktail.description)
            formData.append('recette', this.cocktail.recette)
            cocktailService.createCocktail(formData)
                .then(res => {
                    this.$router.push({ name: 'cList' })
                })
                .catch(err => console.log(err))
        }
    },
}
</script>