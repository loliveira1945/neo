import { createRouter, createWebHistory } from 'vue-router'
import ArticlePage from '@/pages/ArticlePage.vue'
import ArticleDetail from '@/pages/ArticleDetail.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  { path: '/', component: ArticlePage },
  { path: '/article/:id', component: ArticleDetail, props: true },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
