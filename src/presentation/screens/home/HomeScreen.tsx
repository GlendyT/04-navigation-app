/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label="Products"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Settings"
      />
    </View>
  );
};
