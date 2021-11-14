import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Bienvenida from './src/screen/Bienvenida.js';
import LaikaHome from './src/screen/Home/LaikaHome.js';
const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar />
      {/* <ScrollView>
        <View style={styles.container}>
          <Bienvenida />
        </View>
      </ScrollView> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bienvenido" screenOptions={{ headerShown: false }}>
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

export default App;
