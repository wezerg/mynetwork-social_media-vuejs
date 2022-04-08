<template>
    <div class="container">
        <h1>MyNetWork</h1>
        <FormArticles @add="addArticle" v-if="auth.authentified" :auth="auth"/>
        <Articles :auth="auth" :articles="articles"></Articles>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import FormArticles from '../components/FormArticles.vue';
import Articles from '../components/Articles.vue';

export default { 
    props: ["auth"],
    setup(){
        const articles = ref([]);
        onMounted(async () => {
            articles.value = await fetch('http://localhost:3001/articles').then(resp => resp.json());
        });
        async function addArticle(article){
            articles.value.push(article);
        }
        return {articles, addArticle}
    },
    components: {FormArticles, Articles}
}
</script>