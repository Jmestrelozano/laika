import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { bienvenidaStyles } from '../styles/bienvenidaStyles';
import { stylesGeneral } from '../styles/stylesGeneral';
import logo1 from '../../assets/toys_1.png';
import logo2 from '../../assets/toys_2.png';
import logo3 from '../../assets/toys_3.png';
import logo4 from '../../assets/toys_4.png';
import logo5 from '../../assets/toys_5.png';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const Bienvenida = ({ navigation }) => {
  return (
    <View style={[bienvenidaStyles.body, stylesGeneral.backgroundColorBody]}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={bienvenidaStyles.text}>
          Laika <Text style={stylesGeneral.colorSunshineGold}>Member</Text>
        </Text>
        <Text style={bienvenidaStyles.parrafo}>
          Conviértete en miembro, recibe beneficios exclusivos y dale lo mejor a tu mascota
        </Text>

        <View style={bienvenidaStyles.contentImage}>
          <Image style={bienvenidaStyles.contentImage__Image} source={logo1} />
          <Image style={bienvenidaStyles.contentImage__Image} source={logo2} />
          <Image style={bienvenidaStyles.contentImage__Image} source={logo3} />
          <Image style={bienvenidaStyles.contentImage__Image} source={logo4} />
          <Image style={bienvenidaStyles.contentImage__Image} source={logo5} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[stylesGeneral.backgroundColorSunshineGold, bienvenidaStyles.buttonContinue]}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bienvenida;
