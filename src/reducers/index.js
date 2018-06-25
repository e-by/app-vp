import {combineReducers} from 'redux';  
import heroes from './heroesReducer';
import hero from './heroReducer';

const rootReducer = combineReducers({  
  heroes,
  hero
})

export default rootReducer;  