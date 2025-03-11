import axios from 'axios';

const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=${import.meta.env.VITE_API_LANGUAGE}`;

export const getArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response.data.results)
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    throw error;
  }
};
