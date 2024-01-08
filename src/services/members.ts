import {firebase} from '@react-native-firebase/database';

import {show_flash_message} from '../utils/helper';
import {DATABASE_URL} from '../utils/constants';

export const register_member = async (
  gym_id,
  member_phone_number,
  member_form_data,
) => {
  const memberData = {
    full_name: member_form_data.full_name,
    phone_number: member_form_data.phone_number,
    plan: member_form_data.plan,
    joining_date: member_form_data.joining_date,
    gender: member_form_data.gender,
  };

  const gymMembersRef = firebase
    .app()
    .database(DATABASE_URL)
    .ref(`gyms/${gym_id}/members/${member_phone_number}`);

  try {
    await gymMembersRef.set(memberData);
    show_flash_message(
      'Member registered successfully.',
      '',
      'success',
      'success',
    );
  } catch (error) {
    show_flash_message('Error registering member.', '', 'danger', 'danger');
  }
};
