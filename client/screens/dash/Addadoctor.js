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
import { UserAddOutlined } from '@ant-design/icons';

const Addadoctor = ({ navigation }) => {
  const initialValue = {
    name: '',
    email: '',
    password: '',
    speciality: '',
    clinicName: '',
    clinicLocation: '',
    phonNumber: '',
    education: '',
    experience: '',
    treatments: '',
    image: '',
  };
  const [form, setForm] = useState(initialValue);
  const [message, setMessage] = useState("");
  const addDoctore = () => {
    if (form.name && form.email && form.password && form.speciality && form.clinicName && form.clinicLocation && form.phonNumber && form.experience && form.education && form.treatments){
      const newDoctor = async() => {
        try{ await axioscreat.post('/api/v1/specialist',form)
        
          setForm(initialValue);}catch(err){
            
            setMessage("somthing went wrong")

          }
        
      }
      newDoctor();
    }else{
      setMessage("walak 3by koool esheeeeeeeeeeee yalllllllllllla")
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormInput
        labelValue={form.name}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, name:text })) }
        placeholderText="Name"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={form.email}
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
        placeholderText="Password"
        iconType="edit"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={form.speciality}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, speciality:text }))}
        placeholderText="Specialiy"
        iconType="edit"
        secureTextEntry={false}
      />

      <FormInput
        labelValue={form.clinicName}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, clinicName:text }))}
        placeholderText="Clinic name"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.clinicLocation}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, clinicLocation:text }))}
        placeholderText="Clinic location"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.phonNumber}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, phonNumber:text }))}
        placeholderText="Phone number"
        iconType="phone"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.education}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, education:text }))}
        placeholderText="Education"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.experience}
        onChange={({ nativeEvent: {text} }) => setForm((prevstate)=>({...prevstate, experience:text }))}
        placeholderText="Experience"
        iconType="edit"
        secureTextEntry={false}
      />
      <FormInput
        labelValue={form.treatments}
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
    fontFamily: 'Kufam-SemiBoldItalic',
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
    fontFamily: 'Lato-Regular',
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
