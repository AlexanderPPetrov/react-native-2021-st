import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import MoviesScreen from './screens/Movies';
import TVSeriesScreen from './screens/TVSeries';
import { navigationRef } from './RootNavigation';

import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function AppContainer() {


    const drawer = [
        {
            name: "Home",
            component: HomeScreen,
        },
        {
            name: "Movies",
            component: MoviesScreen,
        },
        {
            name: "TVSeries",
            component: TVSeriesScreen,
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
        <NavigationContainer ref={navigationRef}>
            <Drawer.Navigator initialRouteName="Home"
                              drawerContent={props => <DrawerContent {...props} />}>
                {getScreens()}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}