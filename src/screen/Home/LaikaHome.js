import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { stylesGeneral } from '../../styles/stylesGeneral';
import { laikahomeStyles } from '../../styles/laikahomeStyles';
import arrowLeft from '../../../assets/arrow_down.png';
import cardMember from '../../../assets/card_member.png';
import { bienvenidaStyles } from '../../styles/bienvenidaStyles';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import BenefitsLaika from '../../components/benefits/BenefitsLaika';

const LaikaHome = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={[stylesGeneral.backgroundColorBody, laikahomeStyles.body]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image style={{ transform: [{ rotate: '90deg' }] }} source={arrowLeft} />
        </Pressable>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={bienvenidaStyles.text}>
            Laika <Text style={stylesGeneral.colorSunshineGold}>Member</Text>
          </Text>
          <Text style={bienvenidaStyles.parrafo}>
            Conviértete en miembro, recibe beneficios exclusivos y dale lo mejor a tu mascota
          </Text>

          <Image
            style={{
              resizeMode: 'contain',
              width: responsiveScreenWidth(75),
              height: responsiveScreenHeight(30),
            }}
            source={cardMember}
          />

          <BenefitsLaika />
        </View>
      </View>
    </ScrollView>
  );
};

export default LaikaHome;

const styles = StyleSheet.create({});
