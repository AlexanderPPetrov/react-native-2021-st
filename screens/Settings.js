import React, {useState} from 'react';
import { StyleSheet, View, Text, Switch, ScrollView, Alert, Modal } from 'react-native';
import Layout from '../layouts/Default';
import ScreenTitle from '../components/ScreenTitle';
import {Button, Card, COLOR} from 'react-native-material-ui';

export default function MoviesScreen(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    };

    const showAlert = () => {
        Alert.alert(
            "Сигурен ли си?",
            "Ако си сигурен натисни ОК",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    };

    const showModal = () => {
        setModalVisible(true);
    };

    return (
        <Layout title={"Филми"} drawerNavigation={props.navigation}>
            <View>
                <ScreenTitle title={"Настройки"}></ScreenTitle>
            </View>
            <ScrollView style={styles.screenContainer}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionLabel}>Звук</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.optionContainer}>
                    <Button raised secondary text="Alert"
                            onPress={showAlert}
                            style={{container:styles.loginButton}}/>

                </View>
                <View style={styles.optionContainer}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Hello World!</Text>
                                <Button raised secondary text="Hide modal"
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                        style={{container:styles.loginButton}}/>
                            </View>
                        </View>
                    </Modal>
                    <Button raised secondary text="Modal"
                            onPress={showModal}
                            style={{container:styles.loginButton}}/>
                </View>

            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    optionLabel: {
        color: COLOR.white,
    },
    screenContainer: {
        padding: 10,
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: COLOR.lightBlue800,
        borderBottomWidth: 1,
        paddingVertical: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        height: '100%',
        width: '100%',
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});