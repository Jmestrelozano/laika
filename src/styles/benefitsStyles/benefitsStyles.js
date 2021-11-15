import { StyleSheet } from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { stylesGeneral } from '../stylesGeneral';

export const benefitsStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ffd600',
    borderRadius: 10,
    backgroundColor: '#653f90',
    paddingVertical: 30,
    paddingHorizontal: 15,
    width: responsiveScreenWidth(90),
  },

  containerBenefits: {
    width: '90%',
    marginVertical: 10,
  },

  containerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2.2),
  },

  iconImage: {
    resizeMode: 'contain',
    height: responsiveScreenHeight(3),
    width: responsiveScreenWidth(5),
    marginLeft: -1,
    marginRight: 5,
  },

  spanBenefits: {
    fontWeight: '300',
    fontSize: responsiveScreenFontSize(1.6),
  },
  line: {
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ffd600',
    marginVertical: 30,
  },

  termsText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerInfoPrice: {
    width: responsiveScreenWidth(35),
    backgroundColor: '#8a5dbc',
    borderRadius: 20,
    padding: 10,
  },
  rotateImage: {
    transform: [{ rotate: '180deg' }],
  },

  buttonMembresy: {
    borderRadius: 10,
    width: '100%',
    height: responsiveScreenHeight(6),
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    color: 'black',
  },
});
