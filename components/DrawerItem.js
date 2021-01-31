import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR, Button } from 'react-native-material-ui';
import {
    Text,
    TouchableRipple,
} from 'react-native-paper';
import { navigate } from '../RootNavigation';

export default function DrawerItem(props) {

    const getIcon = () => {
        if(props.icon === 'movie-open'){
            return <MaterialCommunityIcons name={props.icon} size={22} color={COLOR.white} />
        }
        return <Ionicons name={props.icon} size={22} color={COLOR.white} />
    };

    const onDrawerItemPress = () => {
        console.log(props.screen);
        navigate(props.screen)
    };

    return (
        <>
            <TouchableRipple onPress={onDrawerItemPress}>
                <View style={styles.drawerItemContainer}>
                    { getIcon() }
                    <Text style={styles.drawerItemLabel}>{ props.title }</Text>
                </View>
            </TouchableRipple>
        </>

    );
}
const styles = StyleSheet.create({
    drawerItemContainer: {
        paddingHorizontal: 17,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerItemLabel: {
        padding: 10,
        fontSize: 15,
        color: COLOR.white,
    },
});