import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3e074b6d14a7158d77bae02b97da066e";

const whithBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies() { //esse static me obriga a usar o MovieService para chamar qualquer um
        //dos metodos descritos abaixo
        return axios(whithBaseUrl("movie/popular"))
    }
    static getMovieDetails(id){
        return axios(whithBaseUrl(`movie/${id}`));
    }
    static searchMovies(movie){
        return axios(whithBaseUrl("search/movie")+ `&query=${movie}`);
    }
}
