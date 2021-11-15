import { StyleSheet } from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';

export const experienciesStyles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    width: responsiveScreenWidth(90),
  },
});
