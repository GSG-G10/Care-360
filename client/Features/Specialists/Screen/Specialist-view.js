import  React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import axioscreate from '../../../components/axioscreate';
import SearchSpecialist from '../Components/Search-specialist';


const SpecialistCard = () => {
  const [specialists, setSpecialists] = useState([]);
  const [errorMessage, setErrorMessage] = useState('There is no events with this filter');

  const getSpecialists =async () => {
    try{
      const { data } = await axioscreate.get('/api/v1/specialists');
      setSpecialists(data);
    }catch{
      // setErrorMessage(err.status);
    }
  }
  
  useEffect( () => {
      getSpecialists();
  }, []);

  return(
    <>
    <SearchSpecialist />
    <View style={styles.container} >
      <Text>{JSON.stringify(specialists)}</Text>
    {specialists.length ? specialists.map((specialist) => {
      return(
        <View style={styles.cardContainer} key={specialist.id}>
          <View style={styles.avatarContainer}>
          <Avatar.Image size={65} source={specialist.image} />
          </View>
          <View style={styles.doctorContainer}>
            <Text>{specialist.name}</Text>
            <Text>{specialist.specialty}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Button icon="camera" mode="outlined" color="#FFB803"> View Profile</Button>
            <Button icon="camera" mode="contained" color="#FFB803">
        Book Now
      </Button>
          </View>
        </View>
       )
    }): <Text>Hello</Text>}
    </View>
  </>
  )
};

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor:'#fffab1',
  },
  cardContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#87ceeb',
    // justifyContent: 'space-around',
  },
  avatarContainer:{
    padding: 10
    // backgroundColor: 'white',
  },
  doctorContainer: {
    padding: 10
    // backgroundColor: 'blue',
  },
  buttonsContainer: {
    padding: 10,
    // backgroundColor: 'green',
  }
});

export default SpecialistCard;
