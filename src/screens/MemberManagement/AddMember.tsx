import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import _ from 'lodash';

import Button from '../../components/common/Button';
import CustomTextInput from '../../components/common/CustomTextInput';
import colors from '../../theme/colors';
import CustomAppBar from '../../components/common/CustomAppBar';
import {register_member} from '../../services/members';
import {get_gym_id} from '../../utils/helper';

const AddMemberScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const on_submit = async data => {
    const gym_id = await get_gym_id();
    register_member(gym_id, data.phone_number, data);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomAppBar title={'Add Member'} />

      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomTextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter User Name"
              title={'Full Name'}
              keyboardType={'default'}
            />
          )}
          name="full_name"
        />

        {!_.isEmpty(errors.full_name) && (
          <Text style={styles.error}>This is required.</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomTextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter User's Phone Number"
              keyboardType="phone-pad"
              title={'Phone Number'}
              maxLength={10}
            />
          )}
          name="phone_number"
        />

        {!_.isEmpty(errors.phone_number) && (
          <Text style={styles.error}>This is required.</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomTextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Enter Joining Date"
              title={'Joining Date'}
              keyboardType={'default'}
            />
          )}
          name="joining_date"
        />

        <Text style={styles.title}>Gender</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <View style={styles.input}>
              <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => onChange(itemValue)}>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          )}
          name="gender"
        />

        <Text style={styles.title}>Plan</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <View style={styles.input}>
              <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => onChange(itemValue)}>
                <Picker.Item label="6 Month Plan" value="6month" />
                <Picker.Item label="12 Month Plan" value="12month" />
              </Picker>
            </View>
          )}
          name="plan"
        />

        <Button
          title="Submit"
          onPress={handleSubmit(on_submit)}
          custom_styles={{marginTop: 20}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 16,
  },
  error: {
    color: colors.danger,
    marginTop: 2,
  },
});

export default AddMemberScreen;
