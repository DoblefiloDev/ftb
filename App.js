import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigations/tabs';

export default function App() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}
