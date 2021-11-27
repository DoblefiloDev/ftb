import * as React from 'react';
import { Text, View, StyleSheet, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import getStyleSheet from './src/config/colorscheme';

export default function App() {
    const styles = getStyleSheet();

    return (
        <View style={[screenStyle.container, styles.container]}>
            <Text style={[styles.text]}>Color scheme: {useColorScheme()}</Text>
            <StatusBar />
        </View>
    );
}

const screenStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
