import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { benefitsStyles } from '../../styles/benefitsStyles/benefitsStyles';
import iconList from '../../../assets/Group_2533.png';
import iconBenefits from '../../../assets/arrow.png';
import arrowUp from '../../../assets/arrow_down.png';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { stylesGeneral } from '../../styles/stylesGeneral';
import { bienvenidaStyles } from '../../styles/bienvenidaStyles';

const beneficios = [
  'Regalo de bienvenida',
  'Bono de Netflix para maratonear',
  'Beneficios en restaurantes y tiendas',
  'Por cada pedido que hagas, donaremos un porcentaje a una fundacion',
];

const BenefitsLaika = () => {
  const listBenefits = ({ item }) => {
    return (
      <View style={[stylesGeneral.row, { marginBottom: 10 }]}>
        <Image
          style={{
            resizeMode: 'contain',
            height: responsiveScreenHeight(3),
            width: responsiveScreenWidth(5),
            marginLeft: 1,
            marginRight: 5,
          }}
          source={iconBenefits}
        />

        <Text style={{ fontWeight: '300', color: 'white' }}>{item}</Text>
      </View>
    );
  };

  return (
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

      <View style={stylesGeneral.row}>
        <Text style={{ color: 'white', fontWeight: '500' }}>Ver otros beneficios</Text>
        <Image source={arrowUp} style={benefitsStyles.rotateImage} />
      </View>
      <FlatList data={beneficios} renderItem={listBenefits} keyExtractor={(item, index) => index} />

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
        style={[benefitsStyles.buttonMembresy, stylesGeneral.backgroundColorSunshineGold]}
      >
        <Text style={stylesGeneral.titleButton}>Adquirir Membresia</Text>
      </TouchableOpacity>

      <Text style={[stylesGeneral.colorSunshineGold, benefitsStyles.termsText]}>
        Aplicar terminos y condiciones
      </Text>
    </View>
  );
};

export default BenefitsLaika;
