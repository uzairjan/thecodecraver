import {GET_ARTICLE} from './../actions/types';


export default function(state ='', action){
    switch (action.type) {
        case GET_ARTICLE:
                let data = {uzair: "hello world"};
            return  data;
        default:
          return state;
      }
}