import React, {useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from '../layouts/Default';
import ScreenTitle from "../components/ScreenTitle";


export default function MovieDetailsScreen(props) {

    return (
        <Layout title={"Филм"} drawerNavigation={props.navigation}>
            <View>
                <ScreenTitle title={`Филм: ${props.route.params.title}`}></ScreenTitle>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({

});