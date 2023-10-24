import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

import {AuthContext} from '../context';
import Button from '../../../components/common/Button';
import colors from '../../../theme/colors';
import app_logo from '../../../assets/images/app_logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    fontSize: 18,
    alignItems: 'center',
    fontWeight: '500',
  },
  app_logo_styles: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    color: colors.black,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 10,
  },
  sub_title: {
    alignSelf: 'center',
    marginBottom: 20,
    color: colors.black,
    fontWeight: '500',
    fontSize: 12,
  },
  input_container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  pre_number: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
  },
  terms_text: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    padding: 20,
  },
});

const PhoneNumberInput = () => {
  const {phone_number, set_phone_number, sign_in_with_phone_number} =
    useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image source={app_logo} style={styles.app_logo_styles} />
      <Text style={styles.title}>Welcome to Fit Manager</Text>
      <Text style={styles.sub_title}>
        You will receive a 6 - digit OTP to verify next
      </Text>
      <View style={styles.input_container}>
        <Text style={styles.pre_number}>+91 |</Text>
        <TextInput
          placeholder=" Phone Number"
          value={phone_number}
          onChangeText={set_phone_number}
          style={styles.input}
          autoFocus
          keyboardType="numeric"
          maxLength={10}
          onSubmitEditing={sign_in_with_phone_number}
        />
      </View>

      <Button title="Request OTP" onPress={sign_in_with_phone_number} />

      <View style={styles.terms_text}>
        <Text style={{textAlign: 'center', color: colors.black}}>
          By proceeding, I accept the {'\n'} Terms & Conditions of Fit Manager
        </Text>
      </View>
    </View>
  );
};

export default PhoneNumberInput;
