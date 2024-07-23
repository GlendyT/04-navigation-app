/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  type NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import type {RootStackParams} from '../../routes/StackNavigator';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburguerMenu />
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
