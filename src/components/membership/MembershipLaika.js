import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { stylesGeneral } from '../../styles/stylesGeneral';

import { membershipStyle } from '../../styles/membershipStyles/membershipStyles';

import LoadingProcess from '../loading/LoadingProcess';

const MembershipLaika = () => {
  const [loader, setProcessLoader] = useState(false);
  const [PriceMounth, setPriceMounth] = useState(0);
  const [resultMembresy, setMembresy] = useState(0);

  const calculateMembresy = () => {
    setProcessLoader(true);

    setTimeout(() => {
      const totalMounth = 12;
      const desc = 15 / 100;
      const value = PriceMounth * totalMounth;
      const resultTotal = value * desc;
      setMembresy(resultTotal);

      setProcessLoader(false);
    }, 1500);
  };
  return (
    <View style={[stylesGeneral.centrado, membershipStyle.container]}>
      <Text style={[stylesGeneral.colorWhite, membershipStyle.titleMembresy]}>
        Calcula tu ahorro con la membresía
      </Text>
      <Text style={[stylesGeneral.colorWhite, membershipStyle.subtitleMembresy]}>
        ¿Cuanto gastas al mes en tu peludo?
      </Text>
      <TextInput
        onChangeText={(valor) => {
          setPriceMounth(valor);
        }}
        keyboardType="numeric"
        defaultValue={PriceMounth}
        style={membershipStyle.inputNumeric}
      />
      <TouchableOpacity
        onPress={calculateMembresy}
        style={[stylesGeneral.backgroundColorSunshineGold, membershipStyle.buttonMembresy]}
      >
        <Text style={stylesGeneral.titleButton}>Calcular</Text>
      </TouchableOpacity>

      <View style={[stylesGeneral.centrado, { marginVertical: 15 }]}>
        {loader ? (
          <LoadingProcess />
        ) : (
          <>
            <Text style={[stylesGeneral.colorWhite, membershipStyle.textAhorro]}>Te ahorras</Text>
            <Text style={[stylesGeneral.colorSunshineGold, membershipStyle.textPrice]}>
              ${resultMembresy}
            </Text>
            <Text style={[stylesGeneral.colorWhite, membershipStyle.textAhorro]}>al año</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default MembershipLaika;
