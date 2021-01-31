import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Layout from '../layouts/Default';
import ScreenTitle from "../components/ScreenTitle";
import { getMovie } from '../redux/actions';
import { useSelector, useDispatch } from "react-redux";
import {Card, COLOR} from "react-native-material-ui";
import constants from "../constants";
import moment from 'moment';
import 'moment/min/moment-with-locales'

export default function MovieDetailsScreen(props) {

    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(()=> {
        moment.locale('bg');
        dispatch(getMovie({
            language: 'bg-BG',
            id: props.route.params.id,
        }))
    }, []);

    const getFormattedDate = () => {
        return moment(movie.release_date).format('MMMM Do YY');
    };

    return (
        <Layout title={"Филм"} drawerNavigation={props.navigation}>
            <View>
                <ScreenTitle title={`Филм: ${props.route.params.title}`}></ScreenTitle>
            </View>
            <Card style={{container: styles.movieContainer}} >
                <View style={styles.movieImageContainer}>
                    <Image style={styles.movieImage}
                           resizeMode="cover"
                           source={{uri: `${constants.backdropPath}${movie.backdrop_path}`}}
                    ></Image>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.releaseDate}>{getFormattedDate()}</Text>
                    <View style={styles.overviewContainer}>
                        <Text style={styles.overview}>{movie.overview}</Text>
                    </View>
                </View>
            </Card>
        </Layout>
    );
}

const styles = StyleSheet.create({
    movieImageContainer: {
        height: 150,
    },
    movieImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    descriptionContainer: {
        flexDirection: 'column',
        padding: 10,
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    releaseDate: {
        fontSize: 12,
        color: COLOR.grey600,
    },
    overviewContainer: {
        marginTop: 7,
        flexDirection: 'row',
    },
    overview: {
        color: COLOR.grey800,
        fontSize: 13,
        flex: 1,
        flexWrap: 'wrap',
    }
});