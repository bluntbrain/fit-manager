import {firebase} from '@react-native-firebase/database';

import {save_gym_id, show_flash_message} from '../utils/helper';
import {DATABASE_URL, ROLE_TYPE} from '../utils/constants';

export const register_user = (phone_number, form_data) => {
  const role = 'gym_owner';
  const user_data = {
    phone: phone_number,
    role: role,

    profile: {
      name: form_data.owner_name,
      email: form_data.email,
      date_joined: firebase.database.ServerValue.TIMESTAMP,
    },
  };
  const user_ref = firebase.app().database(DATABASE_URL).ref('users');
  try {
    user_ref.child(phone_number).set(user_data);
    if (role == ROLE_TYPE.gym_owner) {
      register_gym_details(phone_number, form_data);
    }
  } catch (error) {}
};

export const register_gym_details = async (phone_number, form_data) => {
  const reference = firebase.app().database(DATABASE_URL).ref('gyms');
  try {
    const gymRef = reference.push();

    await gymRef.set({
      gym_name: form_data.gym_name,
      owner_phone_number: phone_number,
      license_number: form_data.license_number || null, // optional field
      gym_location: form_data.gym_location,
    });

    show_flash_message('Data saved successfully.', '', 'success', 'success');
  } catch (error) {
    show_flash_message('Error saving data.', '', 'danger', 'danger');
  }
};

export const does_user_exist = async phone_number => {
  const user_ref = firebase.app().database(DATABASE_URL).ref('users');
  const snapshot = await user_ref
    .orderByChild('phone')
    .equalTo(phone_number)
    .once('value');
  if (snapshot.exists()) {
    get_gym_id_by_owner_phone(phone_number).then(res => {
      save_gym_id(res);
    });
  }
  return snapshot.exists();
};

export const get_gym_id_by_owner_phone = async (owner_phone_number: number) => {
  const gymsRef = firebase.app().database(DATABASE_URL).ref('gyms');
  try {
    const snapshot = await gymsRef
      .orderByChild('owner_phone_number')
      .equalTo(owner_phone_number)
      .once('value');
    if (snapshot.exists()) {
      const gyms = snapshot.val();
      const gymIds = Object.keys(gyms);
      return gymIds.length > 0 ? gymIds[0] : null;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
