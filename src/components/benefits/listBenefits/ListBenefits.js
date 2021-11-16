import { Image, Text, View } from 'react-native';
import React from 'react';
import iconBenefits from '../../../../assets/arrow.png';
import { stylesGeneral } from '../../../styles/stylesGeneral';
import { listbenefitsStyles } from '../../../styles/benefitsStyles/listbenefitsStyles';

const ListBenefits = ({ item }) => {
  return (
    <View style={[stylesGeneral.row, { marginBottom: 10 }]}>
      <Image style={listbenefitsStyles.containerBenefits} source={iconBenefits} />

      <Text style={listbenefitsStyles.textBenefits}>{item}</Text>
    </View>
  );
};

export default ListBenefits;
