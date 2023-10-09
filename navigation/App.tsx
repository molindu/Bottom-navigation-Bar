import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import MainContainer from './MainContainer';
import SplashScreen from 'react-native-splash-screen';


export default function App() {
    useEffect(() => {
        if (Platform.OS === 'android') SplashScreen.hide();
    }, [])
    return (
        <MainContainer />
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })