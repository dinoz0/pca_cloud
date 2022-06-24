import router from '@/router'

export function AuthGuard(){
    let token = localStorage.getItem('token')

    if(token){
        return true
    }

    // Go page login
    router.push('/login')
}