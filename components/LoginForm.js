import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import commonStyles from '../styles';
import { Card } from 'react-native-material-ui';
import { Button } from 'react-native-material-ui';

export default function LoginForm() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onLogin = () => {
        // check if it's a real email
        // check if password length is above 6
        console.log(email, password)
        // send to auth api
        // if ok go to next screen
    };

    return (
        <Card style={{container: styles.loginContainer}}>
            <Text style={commonStyles.formLabel}>Email</Text>
            <View style={[commonStyles.formField, commonStyles.rounded]}>
                <TextInput
                    style={commonStyles.formInput}
                    onChangeText={value => setEmail(value)}
                    value={email}
                />
            </View>
            <Text style={commonStyles.formLabel}>Password</Text>
            <View style={[commonStyles.formField, commonStyles.rounded]}>
                <TextInput
                    style={commonStyles.formInput}
                    onChangeText={value => setPassword(value)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>

            <Button raised primary text="Login"
                    onPress={onLogin}
                    style={{container:styles.loginButton}}/>
        </Card>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        height: 300,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    loginButton: {
        width: '100%',
        borderRadius: 30,
        marginTop: 10,
    }
});
