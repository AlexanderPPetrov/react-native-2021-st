import React from 'react';
import AppContainer from './AppContainer';
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'expo-status-bar';
import {COLOR, ThemeContext, getTheme} from 'react-native-material-ui';
import {useAssets} from 'expo-asset';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
const store = createStore(rootReducer, applyMiddleware(thunk));

const uiTheme = {
    palette: {
        primaryColor: COLOR.lightBlue900,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default function App() {

    const [assets] = useAssets([require('./assets/images/logo.png')]);

    if (!assets) {
        return (
            <AppLoading
                onError={console.warn}
            />
        );
    }
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
            <StatusBar style="light" backgroundColor={COLOR.lightBlue900}/>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </ThemeContext.Provider>
    );
}