import { Image, Text, View } from 'react-native';
import React from 'react';
import { stylesGeneral } from '../../../styles/stylesGeneral';
import { cardexperienciesStyles } from '../../../styles/experienciesStyles/cardexperienciesStyles';

const CardExperiencies = ({ item }) => {
  const { comment, desc, image } = item;
  return (
    <View style={cardexperienciesStyles.containerCard}>
      <View style={[stylesGeneral.row]}>
        <Image style={cardexperienciesStyles.column1} source={{ uri: image }} />

        <View style={cardexperienciesStyles.column2}>
          <Text numberOfLines={3} style={[stylesGeneral.colorWhite, stylesGeneral.bold]}>
            {desc}
          </Text>

          <Text
            numberOfLines={5}
            style={[stylesGeneral.colorWhite, cardexperienciesStyles.textDesc]}
          >
            {comment}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardExperiencies;
