/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';
import {IonIcon} from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text>tab1Screen</Text>
      <IonIcon name="rocket-outline" color={''} />
    </View>
  );
};
