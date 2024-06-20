import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#ff8c00',
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
    input:{
      borderBottomWidth: 1,
      height: 48,
      marginBottom: 12,
      fontSize: 16,
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
    header:{
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
    },
    message:{
      fontSize: 28,
      fontWeight: 'bold',
    },
    containerForm:{
      backgroundColor: '#FFF',
      flex:1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    title:{
      fontSize: 20,
      marginTop: 28,
    },
    button:{
      backgroundColor: '#ff8c00',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonRegister:{
      marginTop: 14,
      alignSelf: 'center',
    },
    registerText:{
      color: '#a1a1a1'
    },
    containerLogo:{
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    photoview:{
      flex: 1,
      aspectRatio: 1,
      margin: 3,
    },
  
    image:{ 
      width: "100%", 
      height: "100%", 
      borderRadius: 12 
    },
  
    mainview:{ 
      flex: 1, 
      backgroundColor: "white", 
    },
  
    imagecover:{
      height: 228,
      width: "100%",
    },
    
    btnprofile:{
      width: 124,
      height: 36,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#ff8c00',
      borderRadius: 10,
      marginHorizontal: 20,
    },
  
    imagecontain:{
      height: 155,
      width: 155,
      borderRadius: 999,
      borderColor: '#ff8c00',
      borderWidth: 2,
      marginTop: -90,
    },

    containerUserData:{
      flex: 1,
      backgroundColor: '#FFF',
      paddingHorizontal: 22,
      paddingTop: 0,
  },

  btnSave:{
      backgroundColor: '#ff8c00',
      height: 44,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center", 
  },

  dataStyle:{
      height: 44,
      width: "100%",
      borderColor: Colors.black,
      borderWidth: 1,
      borderRadius: 4,
      marginVertical: 6,
      justifyContent: "center",
      paddingLeft: 8,
  },

  view: {
      marginHorizontal: 0,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: '#ff8c00',
      alignItems: 'flex-end',
      height: 90
  },

  btnback: {
      position: 'relative',
      left: 5,
      paddingBottom: 10
  },

  profileTitle: {
    position: 'relative',
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 20,
    paddingBottom: 15
  },

  scrollview: {
      alignItems: 'center',
      marginVertical: 22,
  },

  imageUser: {
      height: 170,
      width: 170,
      borderRadius: 85,
      borderWidth: 2,
      borderColor: Colors.black,
  },

  calendario: {
      margin: 20,
      backgroundColor: Colors.black,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 35,
      width: "90%",
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },

  inputArea: {
      height: 44,
      width: "100%",
      borderRadius: 4,
      borderWidth: 1,
      borderColor: Colors.gray,
      marginVertical: 6,
      justifyContent: "center",
      paddingLeft: 8,
  },

  loaderContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },

  loader: {
    width: "100%"
  }
  });