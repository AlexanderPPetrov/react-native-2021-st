import actions from './action-types';
import networkClient from '../network/network-client';

export function setMovies(movies){
    return {type: actions.SET_MOVIES, payload: movies};
}
export function setMovie(movie){
    return {type: actions.SET_MOVIE, payload: movie};
}
export const getMovies = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'discover/movie',
            params,
        );
        dispatch(setMovies(response.results));
    } catch (error) {
        console.log(error)
    }
}
export const getMovie = params => async dispatch => {
    try {
        const response = await networkClient.get(
            `movie/${params.id}`,
            params,
        );
        dispatch(setMovie(response));
    } catch (error) {
        console.log(error)
    }
}
