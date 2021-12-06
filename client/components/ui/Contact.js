import React from 'react'
import { StyleSheet ,View,Text} from 'react-native';
import { Icon } from 'react-native-elements';
function Contact() {
    return (<View>
        <Text>Contact us</Text>
         <View style={styles.socialMedia}>
            <Icon name="twitter" type="font-awesome" color="#00aced" size={20} />
            <Icon name="instagram" type="font-awesome" color="#e4405f" size={20} />
            <Icon name="whatsapp" type="font-awesome" color="#25d366" size={20} />
            <Icon name="facebook" type="font-awesome" color="#3b5998" size={20} />
        </View>
    </View>);
}
const styles = StyleSheet.create({
  container: {},
  socialMedia:{}
});

export default Contact
