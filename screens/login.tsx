import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { styles } from '../components/styles';
import axiosConfig from '../config/axios';
import * as SecureStore from 'expo-secure-store';

export let id = 0

export default function Login({navigation}) {

   const [resultado, setResultado] = useState('Digite seus dados')
   const [usuario, setUsuario] = useState('');
   const [senha, setSenha] = useState('');

   const logar = () => {
      if(usuario === '' || senha === ''){
          setResultado('Preencha todos os campos!')
          return
      }

      const user = {
          usuario: usuario,
          senha: senha
      }

      axiosConfig.post('/auth/login', user)
        .then(async (resposta) => {
          if(resposta.data.error){
          setResultado(resposta.data.error)
          return
          }
          console.log('Id: ' + resposta.data.userId.toString())
          console.log('Token: ' + resposta.data.token)
          console.log('Refresh Token: ' + resposta.data.refreshToken)
          await SecureStore.setItemAsync('id', resposta.data.userId.toString())
          await SecureStore.setItemAsync('token', resposta.data.token)
          await SecureStore.setItemAsync('refreshToken', resposta.data.refreshToken)
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
         source={require('../assets/imagemlogo.png')}
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
          <Text style={styles.buttonRegister}>{resultado}</Text>

      </Animatable.View>

    </View>
 );
}

