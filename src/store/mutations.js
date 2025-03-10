export default {
  // Atualiza os artigos
  SET_ARTICLES(state, articles) {
    state.articles = articles;
  },

  // Define a mensagem de erro
  SET_ERROR(state, error) {
    state.error = error;
  },
};
