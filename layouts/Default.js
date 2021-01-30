import Navbar from '../components/Navbar'
import React from "react";
import {StyleSheet, View} from "react-native";


export default function Layout(props) {

    return (
        <>
            <Navbar title={props.title}
                    drawerNavigation={props.drawerNavigation}
            />
            <View style={styles.defaultContainer}>
                {props.children}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
    },
});
