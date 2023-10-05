import { StatusBar } from 'expo-status-bar';
import { View, Button, TextInput, Alert, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        SecureStore.getItemAsync('token')
        .then((token) => {
            if(token != null){
                navigation.navigate('Home')
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
                onPress={() => {

                if(usuario === 'Admin' && senha === '1234'){
                    SecureStore.setItemAsync('token','123456')
                    AsyncStorage.setItem('user', 'Administrador')
                    Alert.alert('Login efetuado com sucesso!')
                    navigation.navigate("Home")
                    return
                }
                
                if(usuario === '' || senha === ''){
                    Alert.alert('Preencha todos os campos!')
                    return
                }
                else{
                    Alert.alert('Usuário ou senha incorreto!')
                }
                }}
            />
            <StatusBar style="auto" />
        </View>
    );
}