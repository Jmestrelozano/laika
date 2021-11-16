import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Pressable, Text, View } from 'react-native';
import arrowUp from '../../../assets/arrow_down.png';
import { stylesGeneral } from '../../styles/stylesGeneral';
import { benefitsStyles } from '../../styles/benefitsStyles/benefitsStyles';
import ListBenefits from './listBenefits/ListBenefits';
import { SafeAreaView } from 'react-native-safe-area-context';

const beneficios = [
  'Regalo de bienvenida',
  'Bono de Netflix para maratonear',
  'Beneficios en restaurantes y tiendas',
  'Por cada pedido que hagas, donaremos un porcentaje a una fundacion',
];
const MoreBenefitsLaika = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const translation = useRef(new Animated.Value(100)).current;
  const rotation = useRef(new Animated.Value(100)).current;
  useEffect(() => {
    Animated.timing(translation, {
      toValue: shouldShow ? 0 : 100,
      duration: 250,
      useNativeDriver: true,
    }).start();

    Animated.timing(rotation, {
      toValue: shouldShow ? 0 : 100,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [shouldShow]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={stylesGeneral.row}>
        <Text style={{ color: 'white', fontWeight: '500' }}>Ver otros beneficios</Text>
        <Pressable
          onPress={() => {
            setShouldShow(!shouldShow);
          }}
        >
          <Animated.Image
            style={[
              benefitsStyles.rotateImage,
              {
                transform: [{ rotate: shouldShow ? '180deg' : '0deg' }],
              },
            ]}
            source={arrowUp}
          />
        </Pressable>
      </View>
      <Animated.View
        style={{
          transform: [{ translateY: translation }],
        }}
      >
        {shouldShow
          ? beneficios.map((item, index) => {
              return <ListBenefits key={index} item={item} />;
            })
          : null}
      </Animated.View>
    </SafeAreaView>
  );
};

export default MoreBenefitsLaika;
