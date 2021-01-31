import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Layout from '../layouts/Default';



export default function HomeScreen(props) {

    return (
        <Layout title={"Home"} drawerNavigation={props.navigation}>
            <View>
                <Text>Home screen</Text>
            </View>
        </Layout>
    );
}

