<template>
    <div class="container">
        <div class="row justify-content-center" v-if="user">
            <div class="col-12 col-lg-8">
                <h2>Votre profil :</h2>
            </div>
            <div class="col-12 col-lg-8 d-flex justify-content-between align-items-center">
                <p class="mb-0">Pseudo : </p>
                <p class="mb-0">{{user.pseudo}}</p>
            </div>
            <div class="col-12 col-lg-8 d-flex justify-content-between align-items-center">
                <p class="mb-0">Email : </p>
                <p class="mb-0">{{user.email}}</p>
            </div>
            <div class="col-12 col-lg-8 d-flex justify-content-between align-items-center">
                <p class="mb-0">Image de profil</p>
                <img :src="user.urlImgProfil" alt="pp">
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import { onMounted } from '@vue/runtime-core';
export default {
    props: ['auth'],
    setup(props, context) {
        const user = ref({});
        const router = useRouter();
        onMounted(async () => {
            if (!props.auth.authentified) {
                router.push('/');
            }
            else{
                user.value = await fetch('http://localhost:3001/users/' + props.auth.user.id).then(resp => resp.json());
            }
        })
        return {user, router}
    },
}
</script>
<style scoped>
.col-12{
    background: #e8fff8;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 2px #f7f7f7;
    margin: 5px;
}
img{
    width: 150px;
    border-radius: 50%;
}
</style>
