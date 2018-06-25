import * as types from './actionTypes';  
import heroesApi from '../api/HeroesApi';

export function viewDetails(id) {
    return {type: types.VIEW_HERO_DETAILS, id};
}

export function loadHero(id = 0) {
    return function(dispatch) {
        return heroesApi.getHeroData(id).then(heroData => {
            let data = heroData.results;
            if(heroData.results !== undefined) {
                data = data[0];
            }
            dispatch(loadHeroSuccess(data));
        }).catch(error => {
            throw(error);
        });
    }
}

export function loadHeroSuccess(hero) {
    return {type: types.LOAD_HERO_SUCCESS, hero};
}