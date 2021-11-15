import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { stylesGeneral } from '../../../styles/stylesGeneral';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const CardExperiencies = ({ item }) => {
  console.log(item);
  const { comment, desc, image } = item;
  return (
    <View style={{ backgroundColor: '#653f90', padding: 15, marginBottom: 8, borderRadius: 15 }}>
      <View style={[stylesGeneral.row]}>
        <Image
          style={{
            borderRadius: 10,
            resizeMode: 'contain',
            width: responsiveScreenWidth(28),
            height: responsiveScreenHeight(17),
          }}
          source={{ uri: image }}
        />

        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            paddingHorizontal: 10,
            width: responsiveScreenWidth(45),
            height: '100%',
          }}
        >
          <Text numberOfLines={3} style={[stylesGeneral.colorWhite, { fontWeight: 'bold' }]}>
            {desc}
          </Text>

          <Text
            numberOfLines={5}
            style={[stylesGeneral.colorWhite, { fontWeight: '300', fontSize: 14 }]}
          >
            {comment}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardExperiencies;
