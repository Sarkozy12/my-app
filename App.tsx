import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LOGIN</Text>
      <TextInput onChangeText={setUsuario} style = {styles.input} placeholder='Usuário'/>
      <TextInput onChangeText={setSenha} secureTextEntry={true} style = {styles.input} placeholder='Senha'/>
      <Button
        title="Login" color="#000000"
        onPress={() => {

          if(usuario === 'admin' && senha === '1234'){
            Alert.alert('Login efetuado com sucesso!')
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    width: 150,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
