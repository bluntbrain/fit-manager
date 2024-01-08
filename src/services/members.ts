import {firebase} from '@react-native-firebase/database';

import {show_flash_message} from '../utils/helper';
import {DATABASE_URL} from '../utils/constants';

export const register_member = async (
  gym_id,
  member_phone_number,
  member_form_data,
) => {
  const gymMembersRef = firebase
    .app()
    .database(DATABASE_URL)
    .ref(`gyms/${gym_id}/members/${member_phone_number}`);

  try {
    await gymMembersRef.set(member_form_data);
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
