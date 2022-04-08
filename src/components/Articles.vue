<template>
    <section v-if="articles" class="row justify-content-center">
        <article v-for="(a, i) in articles" :key="i" class="col-12 col-lg-8">
            <div class="row justify-content-between">
                <div class="col-6">
                    <p>{{a.pseudo}}</p>
                </div>
                <div class="col-6 text-end">
                    <p>Posté le : {{new Date(a.date).getDate()+ "/" + (new Date(a.date).getMonth() + 1) + "/"+ new Date(a.date).getFullYear()}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <img :src="a.urlImgArticle" alt="" style="width: 100%">
                </div>
                <div class="col-12">
                    <p>{{a.contenu}}</p>
                </div>
                <div class="col-12 d-flex">
                    <p class="my-auto me-3">Like : {{a.like}}</p>
                    <button v-if="auth.authentified" v-on:click="addLike(a)" class="btn btn-success">+</button>
                    <p class="my-auto ms-3">Commentaires : {{a.commentaires.length}}</p>
                </div>
                <div class="col-12">
                    <h2>Commentaires :</h2>
                    <hr/>
                    <Commentaires :commentaires="a.commentaires"/>
                </div>
            </div>
            <div class="row justify-content-center" v-if="auth.authentified">
                <FormCommentaires :article="a" :auth="auth"/>
            </div>
        </article>
    </section>
</template>

<script>
import Commentaires from '../components/Commentaires.vue';
import FormCommentaires from '../components/FormCommentaires.vue';

export default {
    props: ["articles", "auth"],
    setup(props, context){
        async function addLike(article){
            article.like++;
            const response = await fetch(`http://localhost:3001/articles/${article.id}`, {headers: {'Accept': "application/json", 'Content-type': 'application/json'},method: "PUT", body: JSON.stringify(article)});
        }
        return {addLike}
    },
    components: {Commentaires, FormCommentaires}
}
</script>
<style scoped>
article{
    background: #f0f9ff;
    border-radius: 10px;
    padding: 16px 24px;
    margin: 10px;
}
</style>