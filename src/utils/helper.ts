import {showMessage} from 'react-native-flash-message';

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
