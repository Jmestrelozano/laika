import { StyleSheet } from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const bienvenidaStyles = StyleSheet.create({
  body: {
    height: responsiveScreenHeight(100),
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },

  parrafo: {
    marginHorizontal: 20,
    fontSize: responsiveScreenFontSize(2),
    textAlign: 'center',
    color: 'white',
  },

  contentImage: {
    flexDirection: 'row',
    marginTop: 15,
  },

  contentImage__Image: {
    marginRight: 20,
  },

  buttonContinue: {
    borderRadius: 25,
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(6),
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
