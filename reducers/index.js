import user from './user'
import post from './post'
import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers( {
    index: (state = {}, action) => { // SSR을 위해 설정함
        
        switch(action.type) {
            case HYDRATE:
                return {
                    ...state,
                    ...action.payload
                }    
            default:
                return{
                    ...state,
                }
        }

    },
    user,
    post

} );

export default rootReducer;