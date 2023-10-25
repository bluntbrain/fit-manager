import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';

import Button from '../../components/common/Button';
import {AuthContext} from './context';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  input_title: {
    marginTop: 10,
    marginBottom: 8,
  },
});

const Registration = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const {on_register_click, phone_number} = useContext(AuthContext);

  React.useEffect(() => {
    register('gym_name', {required: true});
    register('license_number');
    register('owner_name', {required: true});
    register('email', {required: true});
    register('gym_location', {required: true});
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your details</Text>

      <Text style={styles.input_title}>Gym Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue('gym_name', text)}
        placeholder="Enter Gym Name"
      />
      {errors.gym_name && (
        <Text style={styles.error}>This field is required</Text>
      )}

      <Text style={styles.input_title}>License Number ( optional )</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue('license_number', text)}
        placeholder="Enter License Number ( optional )"
      />

      <Text style={styles.input_title}>Owner Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue('owner_name', text)}
        placeholder="Enter Gym Owner Name"
      />
      {errors.owner_name && (
        <Text style={styles.error}>This field is required</Text>
      )}

      <Text style={styles.input_title}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue('email', text)}
        placeholder="Enter Your Email"
      />
      {errors.email && <Text style={styles.error}>This field is required</Text>}

      <Text style={styles.input_title}>Gym Location</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue('gym_location', text)}
        placeholder="Enter Gym Location/ Address"
      />
      {errors.gym_location && (
        <Text style={styles.error}>This field is required</Text>
      )}

      <Button
        title="Submit"
        onPress={handleSubmit(on_register_click)}
        custom_styles={{marginTop: 20}}
      />
    </View>
  );
};

export default Registration;
