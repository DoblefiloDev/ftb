import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import getStyleSheet from '../config/colorscheme';

export default function App() {
    const styles = getStyleSheet();

    return (
        <View style={[screenStyle.container, styles.container]}>
            <Text style={[styles.text]}>Profile Page</Text>
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
