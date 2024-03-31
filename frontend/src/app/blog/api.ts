import axios from 'axios';

const BASE_URL = 'https://backend-amolbudhiraja.koyeb.app';

export const getFavorites = () => {
    return axios.get<Favorite>(`${BASE_URL}/articles/favorites`);
}

export const getCategories = () => {
    return axios.get(`${BASE_URL}/articles/category/list`);
}

export const getArticle = (articleID: string) => {
    return axios.get(`${BASE_URL}/articles/article?id=${articleID}`);
}

export const getArticleFromSlug = (articleSlug: string) => {
  return axios.get(`${BASE_URL}/articles/article/slug?urlSlug=${articleSlug}`);
}

export function capitalizeFirstLetter(str: String) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Object Description for an Article Object. */
export interface Article {
   author: string; 
   body: string; 
   category: string; 
   date: string; 
   id: string; 
   image: string; 
   keywords: string; 
   summary: string; 
   title: string; 
   url: string;
   views: string;  
  }
  
  export interface Category {
    [key: string]: string;
  }
 
  export interface Favorite {
    [key: string]: string;
  }
  