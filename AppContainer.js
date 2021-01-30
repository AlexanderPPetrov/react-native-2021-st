import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import NotificationsScreen from './screens/Notifications';

const Drawer = createDrawerNavigator();

export default function AppContainer() {


    const drawer = [
        {
            name: "Home",
            component: HomeScreen,
        },
        {
            name: "Notifications",
            component: NotificationsScreen,
        }
    ];

    const getScreens = () => {
        return drawer.map((element, index) => {
            return  <Drawer.Screen
                key={index}
                name={element.name}
                component={element.component} />
        })
    };

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                {getScreens()}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}