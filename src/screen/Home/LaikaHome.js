import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { stylesGeneral } from '../../styles/stylesGeneral';
import { laikahomeStyles } from '../../styles/laikahomeStyles';
import arrowLeft from '../../../assets/arrow_down.png';
import cardMember from '../../../assets/card_member.png';
import { bienvenidaStyles } from '../../styles/bienvenidaStyles';
import BenefitsLaika from '../../components/benefits/BenefitsLaika';
import MembershipLaika from '../../components/membership/MembershipLaika';
import ExperienciesLaika from '../../components/experiencies/ExperienciesLaika';
import { getExperiencies } from '../../api/getExperiencies';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';

const LaikaHome = ({ navigation }) => {
  const dispatch = useDispatch();
  const mostrarExp = async () => {
    dispatch({ type: types.dataExperiencies, payload: await getExperiencies() });
  };

  useEffect(() => {
    mostrarExp();
  }, []);

  return (
    <ScrollView>
      <View style={[stylesGeneral.backgroundColorBody, laikahomeStyles.body]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image style={laikahomeStyles.rotateImage} source={arrowLeft} />
        </Pressable>

        <View style={stylesGeneral.centrado}>
          <Text style={bienvenidaStyles.text}>
            Laika <Text style={stylesGeneral.colorSunshineGold}>Member</Text>
          </Text>
          <Text style={bienvenidaStyles.parrafo}>
            Conviértete en miembro, recibe beneficios exclusivos y dale lo mejor a tu mascota
          </Text>

          <Image style={laikahomeStyles.imageMember} source={cardMember} />

          <BenefitsLaika />
          <MembershipLaika />
          <ExperienciesLaika />
        </View>
      </View>
    </ScrollView>
  );
};

export default LaikaHome;

const styles = StyleSheet.create({});
