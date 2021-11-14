import { StyleSheet } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

export const stylesGeneral = StyleSheet.create({
  colorSunshineGold: {
    color: '#ffd600',
  },
  backgroundColorSunshineGold: {
    backgroundColor: '#ffd600',
  },
  backgroundColorBody: {
    backgroundColor: '#a47cd0',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContinue: {
    borderRadius: 25,
    width: '100%',
    height: responsiveScreenHeight(6),
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorWhite: {
    color: 'white',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
});
