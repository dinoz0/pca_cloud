<template>
    <div>
        <h1>Liste des utilisateurs</h1>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td><span class="del_btn" @click="del(index)">X</span></td>
                    <td>{{ user.id }}</td>
                    <td class="edit" @click="goEdit(user.id)">{{ user.nom }}</td>
                    <td>{{ user.prenom }}</td>
                    <td>{{ user.createdAt }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { userService } from '@/_services'
export default {
    name: 'UserIndex',
    data() {
        return {
            users: []
        }
    },
    mounted() {
        userService.getAllUsers()
            .then(res => this.users = res.data.data)
            .catch(err => console.log(err))
    },
    methods: {
        goEdit(uid){
            this.$router.push({name: 'uEdit', params:{id:uid}})
        },
        del(index) {
            userService.deleteUser(this.users[index].id)
                .then(res => this.users.splice(index, 1))
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