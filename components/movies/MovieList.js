import React from 'react';
import {View, StyleSheet} from 'react-native';
import Movie from './Movie';

export default function MovieList(props) {

    // TODO
    // When this component is created and rendered
    // get movies from api
    // then => setMovies in store
    // render movies from store...

    const movies = [
        {
            "adult": false,
            "backdrop_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "genre_ids": [
                53,
                28,
                878
            ],
            "id": 775996,
            "original_language": "en",
            "original_title": "Outside the Wire",
            "overview": "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.",
            "popularity": 3674.779,
            "poster_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "release_date": "2021-01-15",
            "title": "Outside the Wire",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 504
        },
        {
            "adult": false,
            "backdrop_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 464052,
            "original_language": "en",
            "original_title": "Wonder Woman 1984",
            "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
            "popularity": 2958.722,
            "poster_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "release_date": "2020-12-16",
            "title": "Wonder Woman 1984",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 3171
        },
        {
            "adult": false,
            "backdrop_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 4640523,
            "original_language": "en",
            "original_title": "Wonder Woman 1984",
            "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
            "popularity": 2958.722,
            "poster_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "release_date": "2020-12-16",
            "title": "Wonder Woman 1984",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 3171
        },
        {
            "adult": false,
            "backdrop_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 46405332,
            "original_language": "en",
            "original_title": "Wonder Woman 1984",
            "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
            "popularity": 2958.722,
            "poster_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "release_date": "2020-12-16",
            "title": "Wonder Woman 1984",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 3171
        },
        {
            "adult": false,
            "backdrop_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 464343052,
            "original_language": "en",
            "original_title": "Wonder Woman 1984",
            "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
            "popularity": 2958.722,
            "poster_path": "https://www.themoviedb.org/t/p/w220_and_h330_face/e6SK2CAbO3ENy52UTzP3lv32peC.jpg",
            "release_date": "2020-12-16",
            "title": "Wonder Woman 1984",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 3171
        }
    ];

    const getMovies = () => {

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
            {getMovies()}
        </View>
    );
}

const styles = StyleSheet.create({
    movieList: {
        paddingBottom: 45,
    }
});