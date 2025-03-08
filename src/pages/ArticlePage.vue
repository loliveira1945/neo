<template>
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
</template>

<script>
  import { getArticles } from '../api/articles';
  import ArticleCard from '../components/ArticleCard.vue';

  export default {
    name: 'ArticlePage',
    components: {
      ArticleCard,
    },
    data() {
      return {
        articles: [],
      };
    },
    mounted() {
      getArticles()
        .then(data => {
          this.articles = data;
        })
        .catch(error => {
          console.error('Erro ao carregar os artigos:', error);
        });
    },
  };
</script>
