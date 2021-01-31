import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Movie from './Movie';
import { getMovies } from '../../redux/actions';
import { useSelector, useDispatch } from "react-redux";

export default function MovieList(props) {

    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getMovies({
            language: 'bg-BG',
            include_adult: false,
            page: 1,
        }))
    }, []);

    const getMovieList = () => {
        const movieList = movies.map(movie => {
            return <Movie key={movie.id}
                          title={movie.original_title}
                          release_date={movie.release_date}
                          poster_path={movie.poster_path}
                          overview={movie.overview}
                          id={movie.id}
            ></Movie>
        });
        return movieList
    };

    return (
        <View style={styles.movieList}>
            {getMovieList()}
        </View>
    );
}

const styles = StyleSheet.create({
    movieList: {
        paddingBottom: 45,
    }
});