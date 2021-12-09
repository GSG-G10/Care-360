import * as React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ListDoctors = ({ title, icon, details }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  
  const myArray = details ? details.split(".") : [] ;
  
  return (
    <List.Accordion
      style={styles.listContainer}
      title={title}
      titleStyle={{ color: '#022752', fontWeight: 'bold', fontSize: 19 }}
      left={(props) => <List.Icon {...props} icon={icon} />}
      onPress={handlePress}
    >
      <List.Item title={myArray[0]} />
      <List.Item title={myArray[1]} />
      <List.Item title={myArray[2]} />
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#DCE4E8',
    width: 350,
    height: 55,
    justifyContent: 'center',
    borderRadius: 5,
  },
  details: {
      fontSize:2,
  }
});

export default ListDoctors;
