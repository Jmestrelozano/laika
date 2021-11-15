import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { stylesGeneral } from '../../styles/stylesGeneral';
import { useSelector } from 'react-redux';
import CardExperiencies from './cardExperiencies/CardExperiencies';
import { experienciesStyles } from '../../styles/experienciesStyles/experienciesStyles';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';

const ExperienciesLaika = () => {
  const { dataExperiencies } = useSelector((state) => state.experiencies);

  return (
    <View style={[experienciesStyles.container, stylesGeneral.centrado]}>
      <Text
        style={[
          stylesGeneral.colorWhite,
          { fontSize: responsiveScreenFontSize(4), fontWeight: 'bold', textAlign: 'center' },
        ]}
      >
        Experiencias de LAIKA <Text style={stylesGeneral.colorSunshineGold}>Members</Text>
      </Text>

      <FlatList
        style={{ marginTop: 20 }}
        data={dataExperiencies}
        renderItem={({ item }) => {
          return <CardExperiencies item={item} />;
        }}
      />
    </View>
  );
};

export default ExperienciesLaika;
