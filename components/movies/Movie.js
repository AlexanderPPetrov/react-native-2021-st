import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { Card, COLOR } from 'react-native-material-ui';
import { navigate } from '../../RootNavigation';


export default function MovieItem(props) {

    const navigateToMovie = () => {
        navigate('MovieDetails', {
            id: props.id,
            title: props.title,
        })
    };

    return (
        <Card style={{container: styles.movieContainer}} onPress={navigateToMovie}>
            <Image style={styles.movieImage}
                   source={{uri: props.poster_path}}
            ></Image>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.releaseDate}>{props.release_date}</Text>
                <View style={styles.overviewContainer}>
                    <Text numberOfLines={4}
                          style={styles.overview}>{props.overview}</Text>
                </View>
            </View>
        </Card>

    );
}
const styles = StyleSheet.create({
    movieImage: {
        width: 88,
        height: 132,
    },
    movieContainer: {
        flexDirection: 'row'
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

