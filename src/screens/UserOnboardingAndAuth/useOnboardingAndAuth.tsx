import {useState} from 'react';
import auth from '@react-native-firebase/auth';

import {show_flash_message} from '../../utils/helper';

const useOnboardingAndAuth = () => {
  const [phone_number, set_phone_number] = useState<string>('');
  const [confirm, set_confirm] = useState<any>(null);
  const [code, set_code] = useState<string>('');

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

  const confirm_code = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {}
  };

  const resend_otp = () => {
    sign_in_with_phone_number();
    show_flash_message('OTP sent successfully', '', 'success');
  };

  return {
    phone_number,
    set_phone_number,
    confirm,
    set_confirm,
    code,
    set_code,
    sign_in_with_phone_number,
    confirm_code,
    resend_otp,
  };
};

export default useOnboardingAndAuth;
