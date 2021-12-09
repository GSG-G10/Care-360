import * as React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ListAppointments = ({ title,  details }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  

  return (
    <List.Accordion
      style={styles.listContainer}
      title={title}
      titleStyle={{ color: '#022752', fontWeight: 'bold', fontSize: 19 }}
      left={(props) => <List.Icon {...props} icon={'calendar'} />}
      onPress={handlePress}
    >
     
          {/* <List.Item
            title={item.title}
            description={item.subtitle}
            left={(props) => <List.Icon {...props} icon={item.icon} color={item.color} />}
            right={(props) => <List.Icon {...props} icon={'chevron-right'} />}
            titleStyle={{ color: '#022752', fontWeight: 'bold', fontSize: 19 }}
            descriptionStyle={{ color: '#022752', fontWeight: 'bold', fontSize: 19 }}
            style={{ borderBottomColor: '#022752', borderBottomWidth: 1 }}
          /> */}
      
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#ffc10794',
    width: 350,
    height: 55,
    justifyContent: 'center',
    borderRadius: 5,
  },
  details: {
    fontSize: 2,
  },
});

export default ListAppointments;
