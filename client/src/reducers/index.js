import { GET_ARTICLE, GET_ARTICLES } from './../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE:
            let data = action.payload;
            return data;
        case GET_ARTICLES:
              return  action.payload
          
        default:
            return state;
    }
}

// export default function(state)