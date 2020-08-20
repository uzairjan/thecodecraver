import { GET_ARTICLE, GET_ARTICLES } from "./types";
import axios from 'axios';

// Set logged in user
export const getArticle = () => {
  const action = {
    type: GET_ARTICLE,
  };
  return action;
};


export const  articles = () => 
  dispatch =>{
    axios
      .get('users/articles')
      .then(res => {
        console.log(res)
        dispatch(getArticles(res.data));
      });
}


export const getArticles = (data) => {
  return {
    type: GET_ARTICLES,
    payload: data
  };
}