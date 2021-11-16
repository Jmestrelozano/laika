import { StyleSheet } from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const membershipStyle = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    width: responsiveScreenWidth(90),
  },

  buttonMembresy: {
    borderRadius: 10,
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(6),
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    color: 'black',
  },

  titleMembresy: {
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(4),
    textAlign: 'center',
    width: '90%',
  },

  subtitleMembresy: {
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2),
    marginTop: 10,
  },
  inputNumeric: {
    backgroundColor: '#bf93f1',
    width: '98%',
    borderRadius: 10,
    marginTop: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },

  textAhorro: {
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: responsiveScreenFontSize(4.5),
    fontWeight: 'bold',
  },
});
