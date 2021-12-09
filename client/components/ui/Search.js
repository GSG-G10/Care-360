import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axioscreate from '../../components/axioscreate';

const SearchSpecialist = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [expanded, setExpanded] = React.useState('');
  const [speciality, setSpeciality] = React.useState('');

  const Specialities = [
    'Dentists',
    'General Doctor',
    'Gynecologists',
    'Pediatricians',
    'Skin Doctors',
    'Ophthalmologist',
  ];

  const fetchAllData = async () => {
    const response = await axioscreate.get(`/api/v1/specialists?speciality=${speciality}`);
    if (!response.data) {
      // return setSpecialists([]);
    }
    // setSpecialists(response.data);
  };

  const onChangeSearch = (query) => setSearchQuery(query);
  React.useEffect(() => {
    fetchAllData();
  }, [speciality]);

  return (
    <View>
      <Searchbar
        placeholder="Search doctors"
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor="#022752"
        style={styles.bowlSearch}
      />

      <ListItem.Accordion
      style={styles.bowlFilter}
        content={
          <>
            <MaterialCommunityIcons
              name="filter-variant"
              size={14}
              color="black"
            />
            <ListItem.Content>
              <ListItem.Title>Speciality</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        {Specialities.map((l, i) => (
          <ListItem
            key={i}
            onPress={() => {
              setExpanded(!expanded);
              setSpeciality(l);
            }}
            bottomDivider
          >
            <ListItem.Content>
              <ListItem.Title>{l}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>
    </View>
  );
};

export default SearchSpecialist;

const styles = StyleSheet.create({
  wrapperFilter: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#648',
  },
  bowlFilter: { marginTop: 20, borderRadius: 20 },
  bowlSearch: { width: '80%', height: 35, borderRadius: 20, fontSize: 10 },
});
