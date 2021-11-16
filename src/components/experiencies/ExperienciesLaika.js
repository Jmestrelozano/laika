import { Text, View } from 'react-native';
import React from 'react';
import { stylesGeneral } from '../../styles/stylesGeneral';
import { useSelector } from 'react-redux';
import CardExperiencies from './cardExperiencies/CardExperiencies';
import { experienciesStyles } from '../../styles/experienciesStyles/experienciesStyles';

const ExperienciesLaika = () => {
  const { dataExperiencies } = useSelector((state) => state.experiencies);

  return (
    <View style={[experienciesStyles.container, stylesGeneral.centrado]}>
      <Text style={[stylesGeneral.colorWhite, experienciesStyles.titleExperiencies]}>
        Experiencias de LAIKA <Text style={stylesGeneral.colorSunshineGold}>Members</Text>
      </Text>

      {dataExperiencies.map((item) => {
        return <CardExperiencies key={item.id} item={item} />;
      })}
    </View>
  );
};

export default ExperienciesLaika;
