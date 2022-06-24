<template>
    <div>
        <h1>Edition d'un utilisateur</h1>
        <form @submit.prevent="edit">     
            <div class="formGroup">
                <label for="user_name">Nom</label>
                <input type="text" id="user_name" v-model="user.nom"/>
            </div>
            <div class="formGroup">
                <label for="user_prenom">Prénom</label>
                <input type="text" id="user_prenom" v-model="user.prenom"/>
            </div>
            <div class="formGroup">
                <label for="user_email">Email</label>
                <input type="text" id="user_email" v-model="user.email"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Modifier</button>
            </div>
        </form>
    </div>
</template>
<script>
import { userService } from '@/_services'
export default {
    name: 'UserEdit',
    props: ['id'],
    data(){
        return{
            user: {}
        }
    },
    methods: {
        edit(){
            userService.updateUser(this.user, this.id)
                .then(res => this.$router.push({name: 'uList'}))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        userService.getUser(this.id)
            .then(res => this.user = res.data.data)
            .catch(err => console.log(err))
    },
}
</script>