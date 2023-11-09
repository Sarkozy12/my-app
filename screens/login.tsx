import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import axiosConfig from '../config/axios';
import * as SecureStore from 'expo-secure-store';
import { initializeAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../config/firebase';


export default function login({navigation}) {


   const [resultado, setResultado] = useState('Digite seus dados')
   const [usuario, setUsuario] = useState('');
   const [senha, setSenha] = useState('');

   const logar = () => {
      if(usuario === '' || senha === ''){
          setResultado('Preencha todos os campos!')
          return
      }

      const user = {
          email: usuario,
          password: senha
      }

      const auth = initializeAuth(firebaseApp)
        signInWithEmailAndPassword(auth, usuario, senha)
        .then((resposta) => {
            console.log(resposta.user)
            SecureStore.setItemAsync('token', resposta.user.uid)
            navigation.navigate('Drawer')
        }).catch((error) => {
            console.log(error)
            setResultado('Falha ao realizar login!')
        })
  }

  useEffect(() => {
      SecureStore.getItemAsync('token')
      .then((token) => {
          if(token != null){
              navigation.navigate('Drawer')
          }
      })
  },[])

   const navegation = useNavigation();

   return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} 
      style={styles.header}>
         <Text style={styles.message}>Bem-Vindo</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>

         <Animatable.Image
         animation='flipInY' 
         source={require('../assets/logo.png')}
         style={{ width: '100%'}} resizeMode='contain'/>
         
         <Text style={styles.title}>Email</Text>
         <TextInput  onChangeText={setUsuario} 
         placeholder='Digite um email'
         style={styles.input}/> 

         <Text style={styles.title}>Senha</Text>
         <TextInput onChangeText={setSenha} 
         secureTextEntry={true} 
         placeholder='Digite sua senha'
         style={styles.input}/> 
          
          <TouchableOpacity onPress={logar}  style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Cadastre-se</Text>
          </TouchableOpacity>
          <Text style={styles.buttonRegister}>{resultado}</Text>

      </Animatable.View>

    </View>
 );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor: '#ff8c00',
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
   input:{
      borderBottomWidth: 1,
      height: 48,
      marginBottom: 12,
      fontSize: 16,
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
   }
 })