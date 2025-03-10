<template>
    <MenuNav />
    <ArticlePage /> 
</template>

<script>
import MenuNav from './components/MenuNav.vue';
import ArticlePage from './pages/ArticlePage.vue'

export default {
  components: {
    ArticlePage,
    MenuNav
  },
}
</script>