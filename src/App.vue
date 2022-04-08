<template>
    <Header :auth="auth" :setAuth="setAuth"/>
    <RouterView :auth="auth" :setAuth="setAuth"/>
</template>

<script>
import { ref } from '@vue/reactivity';
import { RouterView, useRouter } from 'vue-router';
import Header from './components/Header.vue';

export default {
    setup(){
        const auth = ref({authentified: false, user: null});
        const router = useRouter();
        function setAuth(user, bool){
            auth.value.authentified = bool;
            auth.value.user = user;
            !bool && (router.push('/'));
        };
        return {auth, setAuth}
    },
    components: {Header}
}


</script>
