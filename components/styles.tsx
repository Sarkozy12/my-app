import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#ff8c00',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 40,
      resizeMode: 'cover'
    },
  
    input: {
      height: 40,
      width: 200,
      marginBottom: 20,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
  
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 20,
    },

    logo: {
      width: 250,
      height: 250,
      resizeMode: 'contain',
      margin: 50,
    },

    heading: {
      color: 'white',
      fontSize: 28,
      fontWeight: 'bold',
    }
  });