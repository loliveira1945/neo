<template>
    <MenuNav />
    <ArticlePage />
    <FooterCustom />
</template>

<script>
import MenuNav from './components/MenuNav.vue';
import FooterCustom from './components/FooterCustom.vue';
import ArticlePage from './pages/ArticlePage.vue'

export default {
  components: {
    ArticlePage,
    MenuNav,
    FooterCustom
  },
}
</script>