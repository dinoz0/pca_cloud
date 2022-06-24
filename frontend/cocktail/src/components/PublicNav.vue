<template>
    <div>
        <router-link to="/admin/dashboard"><img src="../assets/logo.png" alt="Vue Logo" id="logo"></router-link>
        <nav>
            <router-link to="/">Accueil</router-link> |
            <router-link to="/cocktail">Cocktails</router-link> |
            <router-link to="/contact">Contact</router-link> |
    
        </nav>
    </div>
</template>

<script>
export default {
    name: 'PublicNav'
}
</script>

<style>
    #logo{
        position: absolute;
        right: 30px;
        height: 50px;
    }
</style>