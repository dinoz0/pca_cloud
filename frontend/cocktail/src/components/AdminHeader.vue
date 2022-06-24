<template>
    <div class="ad_head">
        Admin Header
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { accountService } from '@/_services/account.service'
export default {
    name: 'AdminHeader',
    methods: {
        logout(){
            accountService.logout()
        }
    },
}
</script>
<style>
    .ad_head{
        border-bottom: solid 1px black;
    }
    button{
        float: right;
    }
</style>