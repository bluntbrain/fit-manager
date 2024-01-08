import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import colors from '../../theme/colors';

const CustomTextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  ...rest
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    borderRadius: 100,
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 16,
  },
});

export default CustomTextInput;
