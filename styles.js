import {
   StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#eee',
   },
   titleBox: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
   },
   innputBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },

   title: {
      fontSize: 28,
      color: 'orange',
      fontWeight: 'bold',
      textAlign: 'center'
   },
   input: {
      color: 'white',
      borderRadius: 3,
      padding: 10,
      height: 40,
      margin: 10,
      borderColor: 'orange',
      borderWidth: 1,
   },
   buttonBox: {
      flex: 1,
      marginTop: 18,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
   },
   button: {
      alignItems: 'center',
      borderRadius: 5,
      padding: 10,
      backgroundColor: 'orange',
      width: '30%',
      height: 40
   },
   buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
   },
   buttonReg: {
      alignItems: 'center',
      borderRadius: 5,
      padding: 10,
      backgroundColor: 'gray',
      width: '30%',
      height: 40
   }

});

export default styles;