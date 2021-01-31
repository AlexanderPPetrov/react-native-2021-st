import Navbar from '../components/Navbar'
import React from "react";
import {StyleSheet, ScrollView} from "react-native";
import { COLOR } from 'react-native-material-ui';

export default function Layout(props) {

    return (
        <>
            <Navbar title={props.title}
                    drawerNavigation={props.drawerNavigation}
            />
            <ScrollView style={styles.defaultContainer}>
                {props.children}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
        backgroundColor: COLOR.lightBlue700,
        padding: 10,
    },
});
