import { getArticles } from '@/api/articles';

export default {
  async fetchArticles({ commit }) {
    commit('SET_LOADING', true);
    commit('SET_ERROR', '');

    try {
      const data = await getArticles();
      commit('SET_ARTICLES', data);
    } catch (error) {
      console.error('Erro ao carregar os artigos:', error);
      commit('SET_ERROR', 'Erro ao carregar os artigos. Tente novamente mais tarde.');
    } finally {
      commit('SET_LOADING', false);
    }
  },
};
