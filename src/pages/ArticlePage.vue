<template>
  <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center pt-[60px]">
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
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
