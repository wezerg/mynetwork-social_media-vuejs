<template>
    <Header></Header>
    <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default {
    setup(){
        
    },
    components: {Header}
}


</script>
