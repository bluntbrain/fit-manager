import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const show_flash_message = (
  message: string,
  description = '',
  type = 'default',
  icon = 'info',
) => {
  showMessage({
    message: message,
    description: description,
    type: type,
    icon: icon,
  });
};

export const save_gym_id = async (gym_id: string) => {
  try {
    await AsyncStorage.setItem('gym_id', gym_id);
  } catch (error) {}
};

export const get_gym_id = async () => {
  try {
    const gym_id = await AsyncStorage.getItem('gym_id');
    if (gym_id !== null) {
      return gym_id;
    }
  } catch (error) {}
  return null;
};
