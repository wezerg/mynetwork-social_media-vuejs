<template v-if="commentaires">
    <div class="row com" v-for="(c, i) in commentaires" :key="i">
        <div class="col-12 d-flex justify-content-between">
            <p>{{c.pseudo}}</p>
            <p>Ajouté le : {{new Date(c.dt).getDate()+ "/" + (new Date(c.dt).getMonth() + 1) + "/"+ new Date(c.dt).getFullYear()}}</p>
        </div>
        <div class="col-12">
            <p>{{c.contenu}}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: ['commentaires'],
    setup() {
        
    },
}
</script>

<style scoped>
.com{
    margin: 10px;
    border: 1px solid rgb(0, 5, 82);
    border-radius: 10px;
    padding: 10px 15px;
}
</style>