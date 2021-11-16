import { StyleSheet } from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export const contentmodalStyes = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2,
    position: 'absolute',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    elevation: 8,
  },
  capa: {
    backgroundColor: 'rgba(54, 52, 52, 0.87)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerModal: {
    backgroundColor: '#fff',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(30),
    borderRadius: 20,

    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    fontSize: responsiveScreenFontSize(2.5),
    color: 'black',
  },
  titleModal: {
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(3),
    color: 'black',
  },
  buttonModal: {
    width: responsiveScreenWidth(70),
    backgroundColor: '#653f90',
    height: responsiveScreenHeight(7),
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
});
