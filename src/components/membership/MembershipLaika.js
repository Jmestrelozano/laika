import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { stylesGeneral } from '../../styles/stylesGeneral';

import { membershipStyle } from '../../styles/membershipStyles/membershipStyles';

const MembershipLaika = () => {
  return (
    <View style={[stylesGeneral.centrado, membershipStyle.container]}>
      <Text style={[stylesGeneral.colorWhite, membershipStyle.titleMembresy]}>
        Calcula tu ahorro con la membresía
      </Text>

      <Text style={[stylesGeneral.colorWhite, membershipStyle.subtitleMembresy]}>
        ¿Cuanto gastas al mes en tu peludo?
      </Text>

      <TextInput keyboardType="numeric" style={membershipStyle.inputNumeric} />

      <TouchableOpacity
        style={[stylesGeneral.backgroundColorSunshineGold, membershipStyle.buttonMembresy]}
      >
        <Text style={stylesGeneral.titleButton}>Calcular</Text>
      </TouchableOpacity>

      <View style={[stylesGeneral.centrado, { marginVertical: 15 }]}>
        <Text style={[stylesGeneral.colorWhite, membershipStyle.textAhorro]}>Te ahorras</Text>
        <Text style={[stylesGeneral.colorSunshineGold, membershipStyle.textPrice]}>$0</Text>
        <Text style={[stylesGeneral.colorWhite, membershipStyle.textAhorro]}>al año</Text>
      </View>
    </View>
  );
};

export default MembershipLaika;
