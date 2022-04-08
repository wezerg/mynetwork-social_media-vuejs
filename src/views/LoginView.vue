<template>
    <div class="container">
        <div class="row justify-content-center">
            <form class="col-12 col-lg-8" action="">
                <h2 class="text-center mt-3">Login</h2>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email :</label>
                    <input type="email" class="form-control" id="inputEmail" v-model="email" required>
                </div>
                <div class="mb-3">
                    <label for="inputPassword" class="form-label">Mot de passe :</label>
                    <input type="password" class="form-control" id="inputPassword" v-model="password" required>
                </div>
                <p style="color: red;">{{error}}</p>
                <button type="submit" class="btn btn-outline-success w-100 mt-2" v-on:click.prevent.stop="login()">Se connecter</button>
            </form>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

export default{
    props: ["auth", "setAuth"],
    setup(props, context) {
        const router = useRouter();
        const email = ref("");
        const password = ref("");
        const error = ref("")
        onMounted(() => {
            if (props.auth.authentified) {
                router.push('/');
            }
        })
        async function login(){
            const users = await fetch('http://localhost:3001/users').then(resp => resp.json());
            let user = users.find((us) => us.email === email.value);
            if (user && user.password === password.value) {
                error.value = "";
                props.setAuth(user, true);
                router.push("/");
            }
            else{
                error.value = "Vos identifiants ne correspondent pas.";
            }
        }
        return {email, password, error, login, router}
    },
}
</script>
