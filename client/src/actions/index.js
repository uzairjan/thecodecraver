import { GET_ARTICLE, GET_ARTICLES } from "./types";
import axios from 'axios';

// Set logged in user
export const getArticle = (data) => {
  const action = {
    type: GET_ARTICLE,
    payload: data
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


export const article = (id) => 
dispatch => {
  axios.get('http://localhost:8000/users/article/'+id)
    .then( res => {
      dispatch(getArticle(res.data))
      console.log('single article:',res);
    })
}

export const getArticles = (data) => {
  return {
    type: GET_ARTICLES,
    payload: data
  };
}