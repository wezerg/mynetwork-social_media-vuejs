<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <RouterLink class="nav-brand" to="/">MyNetWork</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/profil">Profil</RouterLink>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <RouterLink class="nav-link btn btn-outline-success" to="/login">Login</RouterLink>
                        </li>
                        <li class="nav-item ms-lg-3">
                            <RouterLink class="nav-link btn btn-outline-danger" to="/register">Register</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>