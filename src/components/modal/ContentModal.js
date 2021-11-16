import React, { useEffect, useRef } from 'react';

import { Animated, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { useDispatch } from 'react-redux';
import { contentmodalStyes } from '../../styles/contentmodal/contentmodalStyles';
import { stylesGeneral } from '../../styles/stylesGeneral';
import { types } from '../../types/types';

export const ContentModal = ({ showModal }) => {
  const dispatch = useDispatch();
  const translation = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: showModal ? 0 : -500,
      duration: 250,
      useNativeDriver: true,
    }).start();
  });

  const handleQuit = () => {
    dispatch({ type: types.stateModalPayment, payload: false });
  };
  return (
    <>
      {showModal && (
        <View style={contentmodalStyes.container}>
          <View style={contentmodalStyes.capa}>
            <Animated.View
              style={{
                transform: [{ translateY: translation }],
              }}
            >
              <View style={contentmodalStyes.containerModal}>
                <View style={{ marginLeft: '95%' }}>
                  <Pressable onPress={handleQuit}>
                    <Text style={[stylesGeneral.bold, contentmodalStyes.close]}>X</Text>
                  </Pressable>
                </View>

                <Text style={contentmodalStyes.titleModal}>
                  ¿Deseas realizar el pago de la membresía por un valor de{' '}
                  <Text style={[stylesGeneral.bold]}>$50.000?</Text>
                </Text>
                <TouchableOpacity style={contentmodalStyes.buttonModal} onPress={handleQuit}>
                  <Text
                    style={[
                      stylesGeneral.colorWhite,
                      stylesGeneral.bold,
                      { fontSize: responsiveScreenFontSize(2.4) },
                    ]}
                  >
                    Realizar Pago
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </View>
      )}
    </>
  );
};
