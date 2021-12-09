import React from 'react'
import { StyleSheet ,View,Text} from 'react-native';
import { Icon } from 'react-native-elements';
function Contact() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:'1rem'}} >Contact us</Text>
        <View style={styles.socialMedia}>
          <Icon name="twitter" type="font-awesome" color="#ffc107" size={35} />
          <Icon
            name="instagram"
            type="font-awesome"
            color="#ffc107"
            size={35}
          />
          <Icon name="whatsapp" type="font-awesome" color="#ffc107" size={35} />
          <Icon name="facebook" type="font-awesome" color="#ffc107" size={35} />
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width:'100%',
    marginBottom:'1rem',
    marginTop:'2.5rem'
  },
  socialMedia:{
    flexDirection:'row',
    width: '100%',
    justifyContent:'space-around',
    width: '50%',
    marginTop: '1rem',
  }
});

export default Contact
