import React, { useState } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { color } from '../../utils/style/color';
import axioscreat from '../../components/axioscreate';
import FormInput from '../../components/FormInput';
<<<<<<< HEAD
import FontAwesome from 'react-native-vector-icons/FontAwesome';
=======
import { UserAddOutlined } from '@ant-design/icons';
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271

const Addadoctor = ({ navigation }) => {
  const initialValue = {
    name: '',
    email: '',
    password: '',
<<<<<<< HEAD
    specialty: '',
    center_name: '',
    clinic_location: '',
    phone_number: '',
=======
    speciality: '',
    clinicName: '',
    clinicLocation: '',
    phonNumber: '',
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
    education: '',
    experience: '',
    treatments: '',
    image: '',
  };
  const [form, setForm] = useState(initialValue);
  const [message, setMessage] = useState('');
  const addDoctore = () => {
    if (
      form.name &&
      form.email &&
      form.password &&
      form.specialty &&
      form.center_name &&
      form.clinic_location &&
      form.phone_number &&
      form.experience &&
      form.education &&
      form.image &&
      form.treatments
    ) {
      const newDoctor = async () => {
        try {
          let { data } = await axioscreat.post('/api/v1/specialist', form);
          console.log(data);
          if (data) {
            navigation.navigate('Dashboard');
          }
          if (data.message) {
            setMessage(data.message);
          }
        } catch (err) {
          setMessage('somthing went wrong');
        }
      };
      newDoctor();
    } else {
      setMessage('walak 3by koool esheeeeeeeeeeee yalllllllllllla');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormInput
        labelValue={form.name}
<<<<<<< HEAD
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, name: text }))
        }
=======
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, name:text })) }
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
        placeholderText="Name"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={form.email}
<<<<<<< HEAD
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, email: text }))
        }
        placeholderText="Email"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={form.password}
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, password: text }))
        }
=======
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, email:text }))}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={form.password}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, password:text }))}
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
        placeholderText="Password"
        iconType="edit"
        secureTextEntry={true}
      />
      <FormInput
<<<<<<< HEAD
        labelValue={form.specialty}
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, specialty: text }))
        }
=======
        labelValue={form.speciality}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, speciality:text }))}
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
        placeholderText="Specialiy"
        iconType="edit"
        secureTextEntry={false}
      />

      <FormInput
<<<<<<< HEAD
        labelValue={form.center_name}
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, center_name: text }))
        }
=======
        labelValue={form.clinicName}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, clinicName:text }))}
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
        placeholderText="Clinic name"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
<<<<<<< HEAD
        labelValue={form.clinic_location}
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, clinic_location: text }))
        }
=======
        labelValue={form.clinicLocation}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, clinicLocation:text }))}
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
        placeholderText="Clinic location"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
<<<<<<< HEAD
        labelValue={form.phone_number}
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, phone_number: text }))
        }
=======
        labelValue={form.phonNumber}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, phonNumber:text }))}
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
        placeholderText="Phone number"
        iconType="phone"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.education}
<<<<<<< HEAD
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, education: text }))
        }
=======
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, education:text }))}
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
        placeholderText="Education"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.experience}
<<<<<<< HEAD
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, experience: text }))
        }
=======
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, experience:text }))}
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
        placeholderText="Experience"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.treatments}
<<<<<<< HEAD
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, treatments: text }))
        }
        placeholderText="Treatments"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.image}
        onChange={({ nativeEvent: { text } }) =>
          setForm((prevstate) => ({ ...prevstate, image: text }))
        }
        placeholderText="Image"
        iconType="user"
        secureTextEntry={false}
      />

      <Text>{message}</Text>
      <TouchableHighlight underlayColor="" onPress={addDoctore}>
        <View style={styles.btn}>
          <View style={styles.btncontent}>
            <Text style={styles.countText}>Add Doctor</Text>
            <FontAwesome name={'user'} style={{ color: '#127984' }} size={20} />
=======
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, treatments:text }))}
        placeholderText="Treatments"
        iconType="edit"
        secureTextEntry={false}
        keyboardType="numeric"
      />
      <Text>{message}</Text>
      <TouchableHighlight
        underlayColor=""
        onPress={addDoctore}
      >
        <View style={styles.btn}>
          <View style={styles.btncontent}>
            <Text style={styles.countText}>Add Doctor</Text>
            <UserAddOutlined />
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
          </View>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default Addadoctor;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 100,
    width: 150,
    resizeMode: 'cover',
    marginBottom: 50,
    marginTop: 50,
  },
  text: {
<<<<<<< HEAD
    // fontFamily: 'Kufam-SemiBoldItalic',
=======
    fontFamily: 'Kufam-SemiBoldItalic',
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
<<<<<<< HEAD
    // fontFamily: 'Lato-Regular',
=======
    fontFamily: 'Lato-Regular',
>>>>>>> 0cf4c993139201d0fd9b0a00d191f7485be53271
  },
  btn: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: color.yellow,
    shadowOffset: { width: 0, height: 1 },
    backgroundColor: color.yellow,
    shadowOpacity: 0.8,
    height: 45,
    width: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btncontent: {
    flexDirection: 'row',
    height: 45,
    width: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  countText: {
    color: 'black',
    fontSize: 16,
  },
});
