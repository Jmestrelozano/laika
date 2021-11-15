import { StyleSheet } from 'react-native';

export const stylesGeneral = StyleSheet.create({
  colorSunshineGold: {
    color: '#ffc200',
  },
  backgroundColorSunshineGold: {
    backgroundColor: '#ffc200',
  },
  backgroundColorBody: {
    backgroundColor: '#a47cd0',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  colorWhite: {
    color: 'white',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  alineacion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centrado: {
    display: 'flex',
    alignItems: 'center',
  },
  titleButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
