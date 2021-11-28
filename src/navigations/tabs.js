import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import getStyleSheet from '../config/colorscheme';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import BurnScreen from '../screens/BurnScreen';
import { Colors } from '../styles';

const Tab = createBottomTabNavigator();

// eslint-disable-next-line react/prop-types
const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...getStyleSheet().shadow,
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: getStyleSheet().mainIcon.backgroundColor,
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    const theme = getStyleSheet();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...theme.shadow,
                    ...theme.navBar,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[tabBarStyle.view]}>
                            <Image
                                // eslint-disable-next-line no-undef
                                source={require('../assets/icons/home-icon.png')}
                                resizeMode="contain"
                                style={[
                                    tabBarStyle.image,
                                    {
                                        tintColor: focused
                                            ? theme.focusedTab.tintColor
                                            : theme.tab.tintColor,
                                    },
                                ]}
                            />
                            <Text
                                style={[
                                    tabBarStyle.text,
                                    {
                                        color: focused
                                            ? theme.focusedTab.tintColor
                                            : theme.tab.tintColor,
                                    },
                                ]}
                            >
                                HOME
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[tabBarStyle.view]}>
                            <Image
                                // eslint-disable-next-line no-undef
                                source={require('../assets/icons/search-icon.png')}
                                resizeMode="contain"
                                style={[
                                    tabBarStyle.image,
                                    {
                                        tintColor: focused
                                            ? theme.focusedTab.tintColor
                                            : theme.tab.tintColor,
                                    },
                                ]}
                            />
                            <Text
                                style={[
                                    tabBarStyle.text,
                                    {
                                        color: focused
                                            ? theme.focusedTab.tintColor
                                            : theme.tab.tintColor,
                                    },
                                ]}
                            >
                                SEARCH
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Burn"
                component={BurnScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            // eslint-disable-next-line no-undef
                            source={require('../assets/icons/fire-icon.png')}
                            resizeMode="contain"
                            style={{
                                width: 45,
                                height: 45,
                                tintColor: theme.mainIcon.color,
                            }}
                        />
                    ),
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[tabBarStyle.view]}>
                            <Image
                                // eslint-disable-next-line no-undef
                                source={require('../assets/icons/user-icon.png')}
                                resizeMode="contain"
                                style={[
                                    tabBarStyle.image,
                                    {
                                        tintColor: focused
                                            ? theme.focusedTab.tintColor
                                            : theme.tab.tintColor,
                                    },
                                ]}
                            />
                            <Text
                                style={[
                                    tabBarStyle.text,
                                    {
                                        color: focused
                                            ? theme.focusedTab.tintColor
                                            : theme.tab.tintColor,
                                    },
                                ]}
                            >
                                PROFILE
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[tabBarStyle.view]}>
                            <Image
                                // eslint-disable-next-line no-undef
                                source={require('../assets/icons/settings-icon.png')}
                                resizeMode="contain"
                                style={[
                                    tabBarStyle.image,
                                    {
                                        tintColor: focused
                                            ? theme.focusedTab.tintColor
                                            : theme.tab.tintColor,
                                    },
                                ]}
                            />
                            <Text
                                style={[
                                    tabBarStyle.text,
                                    {
                                        color: focused
                                            ? theme.focusedTab.tintColor
                                            : theme.tab.tintColor,
                                    },
                                ]}
                            >
                                SETTINGS
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const tabBarStyle = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 12,
    },
});

export default Tabs;
