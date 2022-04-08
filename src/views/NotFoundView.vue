<template>
    <div class="container-fluid not-found">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 text-center">
                <h2>Error 404</h2>
                <p>Vous vous êtes trompé de chemin il semble.</p>
                <RouterLink class="btn btn-primary" to="/">Retour à l'acceuil</RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

</script>
<style scoped>
.not-found{
    position: absolute;
    top: 50%;
}
</style>