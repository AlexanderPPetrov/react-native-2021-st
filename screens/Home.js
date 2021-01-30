import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Layout from '../layouts/Default';



export default function HomeScreen(props) {

    return (
        <Layout title={"Home"} drawerNavigation={props.navigation}>
            <View>
                <Text>Home screen</Text>
                <Image style={styles.logo}
                    source={require('../assets/images/logo.png')}
                ></Image>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
    }
});
