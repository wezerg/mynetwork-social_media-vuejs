<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <RouterLink class="nav-brand" to="/">MyNetWork</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav" v-if="auth.authentified">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/profil">Profil</RouterLink>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex ms-auto" v-if="auth.authentified">
                        <li class="nav-item ms-lg-3">
                            <button class="btn btn-danger" v-on:click="setAuth(null, false)">Déconnexion</button>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex ms-auto" v-else>
                        <li class="nav-item">
                            <RouterLink class="nav-link btn btn-success text-white" to="/login">Login</RouterLink>
                        </li>
                        <li class="nav-item ms-lg-3">
                            <RouterLink class="nav-link btn btn-warning text-white" to="/register">Register</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: ["auth", "setAuth"],
    setup(props, context){

    }
}
</script>