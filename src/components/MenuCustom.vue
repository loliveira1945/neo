<template>
  <header class="flex flex-col justify-around items-center text-center w-full p-0 fixed top-0 sm:flex-row h-auto">
    <div class="flex items-center justify-evenly w-full sm:w-1/3">
      <img :src="imageSrc" alt="Logo Neo" class="h-20 w-20"/>
      <router-link :to="`/`">
        <ButtonCustom class="button-nav">
          Artigos
        </ButtonCustom>
      </router-link>
    </div>
    <SearchCard v-if="$route.path == '/'" class="pb-4 sm:pb-0"/>
  </header>
</template>

<script>
import ButtonCustom from './ButtonCustom.vue';
import SearchCard from './SearchCard.vue';
import lightLogo from '../assets/images/logo-light.svg';
import darkLogo from '../assets/images/logo-dark.svg';

  export default {
    name: 'MenuCustom',

    data() {
      return {
        isDarkMode: false,
      };
    },

    mounted() {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.isDarkMode = e.matches;
      });
    },

    computed: {
      imageSrc() {
        return this.isDarkMode ? darkLogo : lightLogo;
      },
    },

    components: {
      ButtonCustom,
      SearchCard
    },
  }
</script>