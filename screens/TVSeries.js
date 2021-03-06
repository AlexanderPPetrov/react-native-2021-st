import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from '../layouts/Default';
import ScreenTitle from "../components/ScreenTitle";


export default function TVSeriesScreen(props) {
    return (
        <Layout title={"Сериали"} drawerNavigation={props.navigation}>
            <View>
                <ScreenTitle title={"Каталог със сериали"}></ScreenTitle>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({

});