import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

import {show_flash_message} from '../../utils/helper';
import {RouteNames} from '../../navigation/RouteName';
import {does_user_exist, register_user} from '../../services/onboarding';

export const useOnboardingAndAuth = () => {
  const [phone_number, set_phone_number] = useState<string>('');
  const [confirm, set_confirm] = useState<any>(null);
  const [code, set_code] = useState<string>('');
  const [show_registration, set_show_registration] = useState<boolean>(false);

  const navigation = useNavigation();

  async function sign_in_with_phone_number() {
    const sanitized_number = phone_number.replace(/[^0-9]/g, '');

    if (sanitized_number.length !== 10) {
      show_flash_message(
        'Please enter a valid phone number',
        '',
        'danger',
        'danger',
      );
      return;
    }

    const valid_phone_number = '+91' + sanitized_number;

    const confirmation = await auth().signInWithPhoneNumber(valid_phone_number);
    set_confirm(confirmation);
  }

  async function confirm_code() {
    try {
      await confirm.confirm(code);
      const user_exist_in_db = (await does_user_exist(phone_number)) || false;

      if (user_exist_in_db) {
        navigation.navigate(RouteNames.MainApp);
      } else {
        set_show_registration(true);
      }
    } catch (error) {
      show_flash_message('Please enter a valid OTP', '', 'danger', 'danger');
    }
  }

  const resend_otp = () => {
    sign_in_with_phone_number();
    show_flash_message('OTP sent successfully', '', 'success');
  };

  const on_register_click = async data => {
    await register_user(phone_number, data);
    navigation.navigate(RouteNames.MainApp);
  };

  return {
    phone_number,
    set_phone_number,
    show_registration,
    confirm,
    set_confirm,
    code,
    set_code,
    sign_in_with_phone_number,
    confirm_code,
    resend_otp,
    on_register_click,
  };
};
