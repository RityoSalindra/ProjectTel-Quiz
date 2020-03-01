import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import METRICS from '../../constant/metrics'

const styles = StyleSheet.create({
 
 
    container: {
      flex: 1,
      alignItems: 'center'
    },
    welcome: {
      fontSize: 20,
      margin: 15,
      color: "black",
      textAlign : 'center'
    },
    
    header: {
      backgroundColor: '#FFFFFF'
    },
    title: {
      alignSelf: 'flex-end',
      color: "#6971F7"
    },

});

export default styles;