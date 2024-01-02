import React, {useContext} from 'react';

import useOnboardingAndAuth from './useOnboardingAndAuth';
import PhoneNumberInput from './components/PhoneNumberInput';
import OTPVerification from './components/OTPVerification';
import {AuthContext} from './context';
import Registration from './Registration';

const LoginComponent = () => {
  const {confirm, show_registration} = useContext(AuthContext);

  if (!confirm) {
    return <PhoneNumberInput />;
  }

  if (show_registration) {
    return <Registration />;
  }

  return <OTPVerification />;
};

const Login = () => {
  const auth = useOnboardingAndAuth();
  return (
    <AuthContext.Provider value={auth}>
      <LoginComponent />
    </AuthContext.Provider>
  );
};

export default Login;
