import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginFrom from '../components/LoginForm';

export default function LoginScreen() {
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="auto" />
            <LoginFrom></LoginFrom>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
    },
});
