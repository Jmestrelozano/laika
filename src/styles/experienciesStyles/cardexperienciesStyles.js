import { StyleSheet } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

export const cardexperienciesStyles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#653f90',
    padding: 15,
    marginBottom: 8,
    borderRadius: 15,
    marginTop: 20,
  },
  column1: {
    borderRadius: 10,
    resizeMode: 'contain',
    width: responsiveScreenWidth(32),
    height: responsiveScreenHeight(17),
  },
  column2: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    width: responsiveScreenWidth(48),
    height: '100%',
  },

  textDesc: {
    fontWeight: '300',
    fontSize: 14,
  },
});
