import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Layout from '../layouts/Default';
import ScreenTitle from "../components/ScreenTitle";

export default function HomeScreen(props) {

    return (
        <Layout title={"Начало"} drawerNavigation={props.navigation}>
            <View>
                <ScreenTitle title={"Добре дошли"}></ScreenTitle>
            </View>
        </Layout>
    );
}

