<template>
  <MenuCustom />
  <router-view class="p-8"/>
  <FooterCustom />
</template>

<script>
import MenuCustom from './components/MenuCustom.vue';
import FooterCustom from './components/FooterCustom.vue';
import ArticlePage from './pages/ArticlePage.vue'

export default {
  components: {
    ArticlePage,
    MenuCustom,
    FooterCustom
  },
}
</script>