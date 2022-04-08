<template>
    <div class="row justify-content-center">
        <form class="col-12" action="">
            <h3>Ajouter un commentaire :</h3>
            <div class="mb-3">
                <textarea class="form-control"  name="" id="" cols="30" rows="5" placeholder="Nouveau commentaire" v-model="body"></textarea>
            </div>
            <button class="btn btn-outline-info" type="submit" v-on:click.prevent.stop="addCom()">Laisser mon commentaire</button>
        </form>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    props: ["auth", "article"],
    setup(props, context) {
        const body = ref("");
        async function addCom(){
            if (body.value) {
                const commentaire = {
                    contenu: body.value, 
                    pseudo: props.auth.user.pseudo,
                    dt: Date.now()
                };
                const article = props.article;
                article.commentaires.push(commentaire);
                const response = await fetch(`http://localhost:3001/articles/${article.id}`, {headers: {'Accept': "application/json", 'Content-type': 'application/json'},method: "PUT", body: JSON.stringify(article)});
            }
        }
        return {body, addCom}
    },
}
</script>


<style scoped>
form{
    background: #f0f9ff;
    border-radius: 10px;
    padding: 16px 24px;
}
</style>