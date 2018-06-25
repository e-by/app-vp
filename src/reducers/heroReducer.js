import * as types from '../actions/actionTypes';
const initialState = {
    hero: {}
}

export default function heroReducer(state = initialState.hero, action) {
    switch(action.type) {
        case types.VIEW_HERO_DETAILS:
            return action.id;
        case types.LOAD_HERO_SUCCESS:
            return action.hero;
        default:
            return state;
    }
}