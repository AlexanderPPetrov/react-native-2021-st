import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from '../layouts/Default';
import MovieList from '../components/movies/MovieList'
import ScreenTitle from '../components/ScreenTitle';

export default function MoviesScreen(props) {

    return (
        <Layout title={"Филми"} drawerNavigation={props.navigation}>
            <View>
                <ScreenTitle title={"Каталог с филми"}></ScreenTitle>
                <MovieList/>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({

});