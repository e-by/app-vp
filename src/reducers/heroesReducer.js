import * as types from '../actions/actionTypes';  

const initialState = {
    heroes: []
}
export default function heroesReducer(state = initialState.heroes, action) {  
    switch(action.type) {
      case types.LOAD_HEROES_SUCCESS:
        return action.heroes;
      default: 
        return state;
    }
  }