import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useContext} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

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
  otpView: {
    width: '80%',
    height: 100,
    alignSelf: 'center',
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
    textAlign: 'center',
    color: colors.black,
    fontWeight: '500',
    fontSize: 12,
  },
  otp_input_field_style: {
    color: colors.black,
    fontWeight: '800',
    fontSize: 20,
    borderRadius: 8,
  },
  resend_text: {
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    color: colors.black,
    fontWeight: '500',
  },
});

const OTPVerification = () => {
  const {phone_number, resend_otp, confirm_code, set_code} =
    useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image source={app_logo} style={styles.app_logo_styles} />
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.sub_title}>
        We have sent the verification code to your {'\n'} mobile number +91{' '}
        {phone_number}
      </Text>

      <OTPInputView
        style={styles.otpView}
        pinCount={6}
        autoFocusOnLoad
        onCodeFilled={code => set_code(code)}
        codeInputFieldStyle={styles.otp_input_field_style}
      />
      <Button title="Submit" onPress={confirm_code} />
      <TouchableOpacity onPress={resend_otp}>
        <Text style={styles.resend_text}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerification;
