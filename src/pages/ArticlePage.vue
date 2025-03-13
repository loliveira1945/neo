<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center min-h-screen pt-40 sm:pt-32">
    <!--LOADING-->
    <SpinnerLoading v-if="loading" />

    <!--ERRO-->
    <div v-else-if="error" class="p-4 mb-4 w-full col-start-1 md:col-span-2 lg:col-span-3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{{ error }}</span>
    </div>

    <!--ARTIGOS-->
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
  //import { getArticles } from '../api/articles';
  import { mapState, mapActions } from 'vuex';
  import ArticleCard from '../components/ArticleCard.vue';
  import SpinnerLoading from '../components/SpinnerLoading.vue';

  export default {
    name: 'ArticlePage',
    components: {
      ArticleCard,
      SpinnerLoading
    },

    computed: {
      ...mapState(['articles', 'loading', 'error']),
    },

    methods: {
      ...mapActions(['fetchArticles']),
    },

    mounted() {
      this.fetchArticles();
    },
  };
</script>
