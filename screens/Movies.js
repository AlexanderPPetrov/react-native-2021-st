import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from '../layouts/Default';



export default function MoviesScreen(props) {
    return (
        <Layout title={"Movies"} drawerNavigation={props.navigation}>
            <View>
                <Text>Movies Screen</Text>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({

});