import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: colors.gray,
  },
  buttonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
});

const Button = ({title, onPress, disabled = false, custom_styles}) => {
  const [is_loading, set_is_loading] = useState(false);

  const handlePress = async () => {
    if (disabled) {
      return;
    }

    set_is_loading(true);

    try {
      await onPress();
    } catch (error) {
      console.error("There was an error with button's onPress:", error);
    } finally {
      set_is_loading(false);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled ? styles.disabledButton : null,
        custom_styles,
      ]}
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.7}>
      {is_loading ? (
        <ActivityIndicator size="small" color={colors.black} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;