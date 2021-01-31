import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from 'react-native-material-ui';
import DrawerItem from './DrawerItem';
import Constants from 'expo-constants';

export default function DrawerContent(props) {

    const drawerItems = [
        {
            title: 'Начало',
            icon: 'home-outline',
            screen: 'Home',
        },
        {
            title: 'Филми',
            icon: 'movie-open',
            screen: 'Movies',
        },
        {
            title: 'Сериали',
            icon: 'ios-tv-outline',
            screen: 'TVSeries'
        },
        {
            title: 'Настройки',
            icon: 'cog-outline',
            screen: 'Settings'
        }
    ];


    const getDrawerItems = () => {
        const drawerItemsComponents = drawerItems.map((item, index) => {
            return <DrawerItem
                title={item.title}
                icon={item.icon}
                screen={item.screen}
            />
        });
        return drawerItemsComponents
    };

    return (
        <>
            <LinearGradient
                // Background Linear Gradient
                colors={[COLOR.lightBlue900, COLOR.lightBlue700]}
                style={styles.background}
            />
            <View style={styles.logoContainer}>
                <Image style={styles.logo}
                       source={require('../assets/images/logo.png')}
                ></Image>
                <Text style={styles.logoText}>Каталог за филми</Text>
            </View>
            <ScrollView>
                { getDrawerItems() }
            </ScrollView>
        </>

    );
}
const styles = StyleSheet.create({
    logo: {
        width: 35,
        height: 35,
    },
    logoContainer: {
        padding: 10,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: COLOR.white,
    },
    background: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
});