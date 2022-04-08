<template>
    <div class="container">
        <div class="row justify-content-center">
            <form class="col-12 col-lg-8" action="">
                <h2 class="text-center mt-3">Register</h2>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email :</label>
                    <input type="email" class="form-control" id="inputEmail" v-model="email" required>
                </div>
                <div class="mb-3">
                    <label for="inputPseudo" class="form-label">Pseudo :</label>
                    <input type="email" class="form-control" id="inputPseudo" aria-describedby="pseudoHelp" v-model="pseudo" required>
                    <div id="emailHelp" class="form-text">Utilisé pour vous identifier sur le réseau.</div>
                </div>
                <div class="mb-3">
                    <label for="inputPassword" class="form-label">Mot de passe :</label>
                    <input type="password" class="form-control" id="inputPassword" v-model="password" required>
                </div>
                <div class="mb-3">
                    <label for="inputConfirmPassword" class="form-label">Confirmation du mot de passe :</label>
                    <input type="password" class="form-control" id="inputConfirmPassword" v-model="confirmPassword" required>
                </div>
                <p style="color: red;">{{error}}</p>
                <p style="color: green;">{{success}}</p>
                <button type="submit" class="btn btn-outline-success w-100 mt-2" v-on:click.prevent.stop="register()">S'inscrire</button>
            </form>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

export default {
    props: ['setAuth', 'auth'],
    setup(props, context) {
        const email = ref("");
        const pseudo = ref("");
        const password = ref("");
        const confirmPassword = ref("");
        const error = ref('');
        const success = ref('');
        const router = useRouter();
        onMounted(() => {
            if (props.auth.authentified) {
                router.push('/');
            }
        })
        async function register(){
            if (email.value && pseudo.value && password.value && confirmPassword.value) {
                // Check informations
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!email.value.toLowerCase().match(re)) {
                    error.value = "L'email doit être au format exemple@exemple.exemple";
                    return;
                }
                if (pseudo.value.length < 3) {
                    error.value = "Le pseudo doit faire au moins 3 caractères.";
                    return;
                }
                if (password.value.length < 6) {
                    error.value = "Le mot de passe doit faire au moins 6 caractères.";
                    return;
                }
                if (password.value !== confirmPassword.value) {
                    error.value = "Les mots de passe ne correspondent pas.";
                    return;
                }
                const users = await fetch('http://localhost:3001/users').then(resp => resp.json());
                let user = users.find((us) => us.email === email.value || us.pseudo === pseudo.value);
                if (user) {
                    error.value = "Un utilisateur existe déja avec cette adresse e-mail ou ce pseudo.";
                    return;
                }
                // Succès ->
                error.value = "";
                const userCreated = {pseudo: pseudo.value, email: email.value, password: password.value, urlImgProfil: "https://thispersondoesnotexist.com/image"};
                const response = await fetch(`http://localhost:3001/users`, {headers: {'Accept': "application/json", 'Content-type': 'application/json'},method: "POST", body: JSON.stringify(userCreated)});
                if (response.status === 201) {
                    props.setAuth(userCreated, true);
                    success.value = "Félicitations, vous avez créer votre compte ! Redirection dans 2 secondes.";
                    setTimeout(() => {
                        router.push('/');
                    }, 2000);
                }
            }
            else{
                error.value = "Une ou plusieurs informations sont manquantes";
            }
        }
        return {email, pseudo, password, confirmPassword, error, success, router, register}
    },
}
</script>
