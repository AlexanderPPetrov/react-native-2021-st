import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from '../layouts/Default';



export default function NotificationsScreen(props) {
    return (
        <Layout title={"Notifications"} drawerNavigation={props.navigation}>
            <View>
                <Text>Notifications Screen</Text>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({

});