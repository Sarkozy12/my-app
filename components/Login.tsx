import { StatusBar } from 'expo-status-bar';
import { View, Button, TextInput, Alert, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Text } from '@rneui/themed';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import axiosConfig from '../config/axios';


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
        .then((resposta) => {
          if(resposta.data.error){
          setResultado(resposta.data.error)
          return
          }

          console.log(resposta.data.token)
          SecureStore.setItemAsync('token', resposta.data.token)
          SecureStore.setItemAsync('refreshToken', resposta.data.refreshToken)
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

    return(
        <View 
            style={styles.container}>
            <Image 
                style={styles.logo} 
                source={require('../assets/logo.png')}
            />
            <TextInput 
                onChangeText={setUsuario} 
                style = {styles.input} 
                placeholder='Usuário'
            />
            <TextInput 
                onChangeText={setSenha} 
                secureTextEntry={true} 
                style = {styles.input} 
                placeholder='Senha'
            />
            <Button
                title="Login" 
                color="#000000"
                onPress={logar}
            />
            <Text style={styles.alert}>{resultado}</Text>
            <StatusBar style="auto" />
        </View>
    );
}