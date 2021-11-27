import * as React from 'react';
import { Text, useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './src/styles';

export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === 'light'
      ? Colors.styles.lightThemeText
      : Colors.styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light'
      ? Colors.styles.lightContainer
      : Colors.styles.darkContainer;

  return (
    <View style={[Colors.styles.container, themeContainerStyle]}>
      <Text style={[Colors.styles.text, themeTextStyle]}>
        Color scheme: {colorScheme}
      </Text>
      <StatusBar />
    </View>
  );
}