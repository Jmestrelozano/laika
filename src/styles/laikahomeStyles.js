import { StyleSheet } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

export const laikahomeStyles = StyleSheet.create({
  body: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  imageMember: {
    resizeMode: 'contain',
    width: responsiveScreenWidth(75),
    height: responsiveScreenHeight(30),
  },

  rotateImage: {
    transform: [{ rotate: '90deg' }],
  },
});
