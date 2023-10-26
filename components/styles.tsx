import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#ff8c00',
      alignItems: 'center',
      justifyContent: 'flex-start',
      resizeMode: 'cover'
    },

    sideBar: {
      flex: 1,
      width: "60%",
      backgroundColor: '#ff8c00',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignSelf: 'flex-end'
    },

    socialIcons: {
      flex: 1,
      backgroundColor: '#ff8c00',
      alignItems: 'center',
      justifyContent: 'space-around',
      resizeMode: 'cover',
      flexDirection: 'row'
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

    footerText: {
      fontSize: 15,
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
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
    },

    barraPesquisa: {
      color: "#ff8c00"
    },

    imagemHome: {
      aspectRatio: 1.7,
      width: '100%',
      flex: 1,
    },

    alert: {
      marginTop: 20,
      fontWeight: 'bold',
    },
  });