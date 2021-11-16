import { StyleSheet } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

export const listbenefitsStyles = StyleSheet.create({
  containerBenefits: {
    resizeMode: 'contain',
    height: responsiveScreenHeight(3),
    width: responsiveScreenWidth(5),
    marginLeft: 1,
    marginRight: 5,
  },
  textBenefits: { fontWeight: '300', color: 'white' },
});
