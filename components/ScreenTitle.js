import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { COLOR } from 'react-native-material-ui';
export default function ScreenTitle(props) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginHorizontal: 8,
        marginBottom: 10,
        marginTop: 5,
        borderLeftColor: COLOR.yellow500,
        borderLeftWidth: 3,
    },
    title: {
        color: COLOR.white,
        fontSize: 16,
        paddingLeft: 10,
    }
});