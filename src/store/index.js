import { createStore } from 'vuex';
import mutations from './mutations';

const state = {
  articles: [],
  error: null
};

const store = createStore({
  state,
  mutations
});

export default store;
