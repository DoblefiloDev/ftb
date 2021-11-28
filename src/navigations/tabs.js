import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import getStyleSheet from '../config/colorscheme';

import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const theme = getStyleSheet();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: theme.navBar.backgroundColor,
                    borderRadius: 15,
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );
};

export default Tabs;
