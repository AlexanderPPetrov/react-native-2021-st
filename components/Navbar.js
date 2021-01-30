import { Toolbar } from 'react-native-material-ui';
import React from "react";
import Constants from 'expo-constants';
import {StyleSheet} from "react-native";

export default function Navbar(props) {

    return (
        <Toolbar
            leftElement="menu"
            centerElement={props.title}
            style={{container: styles.toolbar}}
            onLeftElementPress={props.drawerNavigation.toggleDrawer}
        />
    );
}
const styles = StyleSheet.create({
    toolbar: {
        marginTop: Constants.statusBarHeight
    },
});
