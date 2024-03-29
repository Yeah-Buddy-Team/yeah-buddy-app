import React from 'react';
import { Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import KakaoSignInBtn from '../../assets/images/KakaoSignInBtn.png';
import Logo from '../../assets/images/Logo.png';
import { View } from '../../components/Common';
import { COLORS } from '../../constants';
import { useSignIn } from './useSignIn';

export function SignIn() {
  const { width: WIDTH } = useWindowDimensions();
  const { signInWithKakao } = useSignIn();

  return (
    <View
      safe
      fill
      style={{
        backgroundColor: COLORS.INDIGO[500],
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Image
        source={Logo}
        style={{
          resizeMode: 'contain',
          width: 72,
          height: 111,
          top: '30%',
        }}
      />
      <TouchableOpacity
        style={{
          width: WIDTH - 40,
          height: 48,
          marginBottom: '14.7%',
        }}
        onPress={signInWithKakao}
        activeOpacity={0.8}
      >
        <Image
          source={KakaoSignInBtn}
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: '100%',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
