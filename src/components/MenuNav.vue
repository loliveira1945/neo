<template>
  <header class="flex justify-around items-center w-full h-16 p-0 fixed top-0">
    <img :src="imageSrc" alt="Logo Neo" class="h-20 w-20"/>
    <ButtonCustom>Artigos</ButtonCustom>
  </header>
</template>

<script>
import ButtonCustom from './ButtonCustom.vue';
import lightLogo from '../assets/images/logo-light.svg';
import darkLogo from '../assets/images/logo-dark.svg';

  export default {
    name: 'MenuNav',

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
      ButtonCustom
    },
  }
</script>