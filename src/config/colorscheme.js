import { useColorScheme, StyleSheet } from 'react-native';
import { Colors } from '../styles';

const lightStyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
    },
    text: {
        color: Colors.BLACK,
    },
    navBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        borderRadius: 15,
        height: 70,
        backgroundColor: Colors.SOFT_WHITE,
    },
    shadow: {
        shadowColor: Colors.MAIN,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    tab: {
        tintColor: Colors.SOFT_BLACK,
    },
    focusedTab: {
        tintColor: Colors.MAIN,
    },
    mainIcon: {
        backgroundColor: Colors.MAIN,
        color: Colors.WHITE,
    },
});

const darkStyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND_BLACK,
    },
    text: {
        color: Colors.WHITE,
    },
    navBar: {
        position: 'absolute',
        bottom: 20,
        left: 15,
        right: 15,
        elevation: 0,
        borderRadius: 15,
        height: 65,
        backgroundColor: Colors.SOFT_BLACK,
    },
    shadow: {
        shadowColor: Colors.MAIN,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    tab: {
        tintColor: Colors.WHITE,
    },
    focusedTab: {
        tintColor: Colors.MAIN,
    },
    mainIcon: {
        backgroundColor: Colors.MAIN,
        color: Colors.WHITE,
    },
});

export default function getStyleSheet() {
    const colorScheme = useColorScheme();

    if (colorScheme === 'light') {
        return lightStyle;
    } else if (colorScheme === 'dark') {
        return darkStyle;
    }

    return lightStyle;
}
