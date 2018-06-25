import md5 from 'blueimp-md5';

const PUBLIC_KEY = '298bab46381a6daaaee19aa5c8cafea5';
const BASE_URL = 'http://gateway.marvel.com:80';
const URI = '/v1/public/characters';

class HeroesApi {

    static getAllHeroes() {
        const query = BASE_URL + URI + '?' + this.getQueryParams();
        return fetch(query).then(response => {
            return response.json();
        }).then(json => {
            //parse json
            return json.data;
        }).catch(
            error => error
        );
    }

    static getHeroData(heroId) {
        const query = BASE_URL + URI + '/' + heroId + '?' + this.getQueryParams();
        return fetch(query).then(response => {
            return response.json();
        }).then(json => {
            //parse json
            return json.data;
        }).catch(error => error);
    }

    static getQueryParams() {
        const privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
        let params = {
            ts : + new Date(),
            apikey : PUBLIC_KEY,
            privateKey : privateKey
        }
        params.hash = md5(params.ts + params.privateKey + params.apikey);
        return `ts=${params.ts}&apikey=${params.apikey}&hash=${params.hash}`;
    }
}
export default HeroesApi;
