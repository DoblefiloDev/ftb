import { StyleSheet } from 'react-native';

export const WHITE = '#FFFFFF';
export const BLACK = '#000000';

export const ERROR = '#F50C04';
export const WARNING = '#D5E415';
export const SUCCESS = '#A8DF1A';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
