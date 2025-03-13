<template>
  <div class="flex flex-col items-center h-auto pt-[90px]">
    <!--LOADING-->
    <SpinnerLoading v-if="loading && !article" />

    <!--ERRO-->
    <div v-else-if="error && !article" class="p-4 mb-4 w-full text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{{ error }}</span>
    </div>

    <!--ARTIGO-->
    <div v-if="article" class="h-screen flex flex-col justify-center items-center sm:w-2/3 md:w-2/3 lg:w-2/3">
      <img 
        :src="imageSrc" 
        :alt="article.title" 
        class="w-fit h-96 object-cover object-top rounded-lg"
      />
      <h1 class="w-fit py-5">{{ article.title }}</h1>
      <p class="w-fit py-5">{{ article.overview }}</p>
      <div class="w-full flex justify-evenly py-5">
        <router-link :to="`/`">
          <ButtonCustom class="button-detail">
            Voltar
          </ButtonCustom>
        </router-link>
        
        <a 
          :href="'https://youtube.com/results?search_query=' + article.title + ' trailer dublado'" 
          target="_blank" 
          rel="external"
        >
          <ButtonCustom class="button-detail">
            Trailer
          </ButtonCustom>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonCustom from '../components/ButtonCustom.vue';
  import SpinnerLoading from '../components/SpinnerLoading.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'ArticlePage',

    components: {
      ButtonCustom,
      SpinnerLoading
    },

    computed: {
      ...mapState(['articles', 'loading', 'error']),

      article() {
        const id = this.$route.params.id;
        //console.log(id)

        return this.articles.find(article => article.id == id);
      },

      imageSrc() {
          if (this.article.poster_path) {
            return `https://image.tmdb.org/t/p/original/${this.article.backdrop_path}`;
          }
          return defaultImage;
      }
    },

    methods: {
      ...mapActions(['fetchArticles']),
    },

    mounted() {
      this.fetchArticles();
    },
  }
</script>
