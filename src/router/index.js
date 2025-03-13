import { createRouter, createWebHistory } from 'vue-router'
import ArticlePage from '@/pages/ArticlePage.vue'
import ArticleDetail from '@/pages/ArticleDetail.vue'

const routes = [
  { path: '/', component: ArticlePage },
  { path: '/movie/:id', component: ArticleDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
