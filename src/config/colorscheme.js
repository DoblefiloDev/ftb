import { useColorScheme, StyleSheet } from 'react-native';
import { Colors } from '../styles';

const lightStyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.SOFT_WHITE,
    },
    text: {
        color: Colors.BLACK,
    },
    navBar: {
        backgroundColor: Colors.SOFT_BLACK,
    },
});

const darkStyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.SOFT_BLACK,
    },
    text: {
        color: Colors.WHITE,
    },
    navBar: {
        backgroundColor: Colors.SOFT_WHITE,
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
