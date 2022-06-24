<template>
    <div>
        <section>
            <img src="@/assets/banner.jpg" alt="Cocktail Banner">
        </section>
        <article>
            <a href="#" v-for="cocktail in cocktails" :key="cocktail.id">
                <img :src="cocktail.imageUrl">
                <div>
                    <h3>{{ cocktail.nom}}</h3>
                    <p>{{ cocktail.description }}</p>
                </div>
            </a>
        </article>
    </div>
</template>

<script>
import { cocktailService } from '@/_services'
export default {
    name: 'Home',
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
}
</script>