import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Appbar} from 'react-native-paper';

const CustomAppBar = ({title}) => {
  const navigation = useNavigation();

  const go_back = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={go_back} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomAppBar;
