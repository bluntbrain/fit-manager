import React, {useContext} from 'react';

import useOnboardingAndAuth from './useOnboardingAndAuth';
import PhoneNumberInput from './components/PhoneNumberInput';
import OTPVerification from './components/OTPVerification';
import {AuthContext} from './context';

const LoginComponent = () => {
  const {confirm} = useContext(AuthContext);

  if (!confirm) {
    return <PhoneNumberInput />;
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
