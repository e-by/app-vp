import HeroesApi from '../api/HeroesApi';
import * as types from './actionTypes';

export function loadHeroes() {
    return function(dispatch) {
        return HeroesApi.getAllHeroes().then(heroes => {
            if(!heroes) return null;
            dispatch(loadHeroesSuccess(heroes.results));
        }).catch(error => {
            throw (error);
        });
    };
};

export function loadHeroesSuccess(heroes) {
    return {type: types.LOAD_HEROES_SUCCESS, heroes};
}