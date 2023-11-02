import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
   const navegation = useNavigation();
 return (
    <View style={style.container}>

      <View style={style.containerLogo}>
         <Animatable.Image
         animation='flipInY' 
         source={require('../../../assets/imagemlogo.png')}
         style={{ width: '100%'}} resizeMode='contain'/>
      </View>
      
      
      <Animatable.View  delay={700} animation='fadeInUp' style={style.containerForm}>
         <Text style={style.title}>Texto de Teste Temporario</Text>
         <Text style={style.text}>Faça o Login Para Começar</Text>
         
         <TouchableOpacity onPress={ () => navegation.navigate("Login")} style={style.button}>
            <Text style={style.buttonText}>
               Acessar
            </Text>
         </TouchableOpacity>
      </Animatable.View>

    </View>
 );
}

const style = StyleSheet.create({
   container:{
      flex:1,
   },
   containerLogo:{
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   containerForm:{
      flex:1,
      backgroundColor: '#ff8c00',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
   },
   title:{
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom: 12,
   },
   text:{
      color: 'black',
   },
   button:{
      position: 'absolute',
      backgroundColor: "#FFF",
      borderRadius: 50,
      paddingVertical: 8,
      width: '60%',
      alignSelf: 'center',
      bottom: '15%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   buttonText:{
      fontSize: 18,
      fontWeight: 'bold'
   }

})