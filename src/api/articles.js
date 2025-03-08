import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ba78865d7c5dbe3eb65082f6010f9ae6&language=pt-BR';

export const getArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data.results)
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    throw error;
  }
};
