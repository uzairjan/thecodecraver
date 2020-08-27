import { combineReducers } from 'redux';
import { GET_ARTICLE, GET_ARTICLES } from './../actions/types';


const initialState = {}

function getArticles(state = initialState, action) {
    if (action.type === GET_ARTICLES) {
        return action.payload;
    }else{
        return state;
    }
}


function getArticle(state=initialState,action){
    if (action.type === GET_ARTICLE) {
       return action.payload
    }else{
        return state;
    }
}


const rootReducer = combineReducers({getArticle,getArticles});

export default rootReducer;

// export default function(state)