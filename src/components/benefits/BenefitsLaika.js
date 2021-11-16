import React from 'react';
import { Image, Linking, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { benefitsStyles } from '../../styles/benefitsStyles/benefitsStyles';
import iconList from '../../../assets/Group_2533.png';

import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { stylesGeneral } from '../../styles/stylesGeneral';

import MoreBenefitsLaika from './MoreBenefitsLaika';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';

const BenefitsLaika = () => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={benefitsStyles.container}>
        <Text style={stylesGeneral.colorWhite}>Beneficios los 365 dias del año</Text>
        <View style={benefitsStyles.containerBenefits}>
          <View style={[stylesGeneral.row, { marginBottom: 15 }]}>
            <Image style={benefitsStyles.iconImage} source={iconList} />
            <Text style={benefitsStyles.containerText}>
              <Text style={stylesGeneral.colorSunshineGold}>15%</Text> de descuentos en todos los
              productos
            </Text>
          </View>
          <View style={[stylesGeneral.row]}>
            <Image style={benefitsStyles.iconImage} source={iconList} />

            <Text style={benefitsStyles.containerText}>
              Domicilio <Text style={stylesGeneral.colorSunshineGold}>gratis</Text>{' '}
              <Text style={benefitsStyles.spanBenefits}>*a partir de %120.000</Text>
            </Text>
          </View>
        </View>

        <MoreBenefitsLaika />
        <View style={benefitsStyles.line}></View>

        <View style={[stylesGeneral.row, { justifyContent: 'space-between' }]}>
          <View style={stylesGeneral.column}>
            <Text style={stylesGeneral.colorWhite}>Paga unicamente</Text>
            <Text
              style={{ color: 'white', fontSize: responsiveScreenFontSize(3), fontWeight: 'bold' }}
            >
              $69.900 <Text style={{ fontWeight: '200' }}>/año</Text>
            </Text>
          </View>

          <View style={benefitsStyles.containerInfoPrice}>
            <Text style={stylesGeneral.colorWhite}>
              Lo que equivale a <Text style={{ fontWeight: 'bold' }}>$5.260</Text> el mes
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => dispatch({ type: types.stateModalPayment, payload: true })}
          style={[benefitsStyles.buttonMembresy, stylesGeneral.backgroundColorSunshineGold]}
        >
          <Text style={stylesGeneral.titleButton}>Adquirir Membresia</Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => Linking.openURL('https://laika.com.co/terms_conditions_membership/bog')}
        >
          <Text style={[stylesGeneral.colorSunshineGold, benefitsStyles.termsText]}>
            Aplican terminos y condiciones
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default BenefitsLaika;
