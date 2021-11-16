import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bienvenida from './src/screen/Bienvenida.js';
import LaikaHome from './src/screen/Home/LaikaHome.js';

import SplashScreen from 'react-native-splash-screen';
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const Stack = createStackNavigator();
const LaikaApp = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log(window.navigator.onLine);
    if (window.navigator.onLine === false) {
      alert('Verifica tu conexion a internet');
    }
  }, []);

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Bienvenido"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        >
          <Stack.Screen name="Bienvenido" component={Bienvenida} />
          <Stack.Screen name="Home" component={LaikaHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LaikaApp;
