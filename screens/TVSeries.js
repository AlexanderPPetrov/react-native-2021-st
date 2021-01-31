import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from '../layouts/Default';



export default function TVSeriesScreen(props) {
    return (
        <Layout title={"TV Series"} drawerNavigation={props.navigation}>
            <View>
                <Text>TV Series Screen</Text>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({

});