/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import {Pressable} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {IonIcon} from './IonIcon';
import { globalColors } from '../../theme/theme';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu-outline" color={ globalColors.primary} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
