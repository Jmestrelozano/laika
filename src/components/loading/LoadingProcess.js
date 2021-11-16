import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { loadingprocessStyles } from '../../styles/loadingStyles.js/loadingprocessStyles';

const LoadingProcess = () => {
  return (
    <View style={loadingprocessStyles.container}>
      <ActivityIndicator size="large" color="white" />
      <Text style={loadingprocessStyles.text}>Calculando Membresia...</Text>
    </View>
  );
};

export default LoadingProcess;
