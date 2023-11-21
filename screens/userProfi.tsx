import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/styles";
import axiosConfig from "../config/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { id } from './login'
import { ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";

export default function Profile({ navigation }) {

  const toUserData = () => {

    navigation.navigate('UserData')
  }

  const [retorno, setRetorno] = useState('')

  async function infoUsuario() {

    const resultado = await AsyncStorage.getItem('id')
    const header = {
      refreshToken: resultado
    }

    console.log('antes axios: ' + resultado)
    axiosConfig.post('/auth/refresh', header)
      .then((resposta) => {
        if (resposta.data.error) {
          setRetorno(resposta.data.error)
          return
        }

        console.log(resposta.data)
      }).catch((error) => {
        console.log(error)
        setRetorno('Falha no refresh do Token!')
        console.log(retorno)
      })
  }
  const [clientes, setClientes] = useState([])
  useEffect(() => {
    axiosConfig.get('/clientes/' + id) //
    //axiosConfig.get('/clientes/:' + id) CAMINHO CORRETO PARA UTILIZAR A FUNÇÃO MAP
      .then((resposta) => {
        console.log('Resposta get Cliente: ' + resposta.data.nome)
        setClientes(resposta.data)
      })
  }, [])

  /*useEffect(() => {
    infoUsuario()
  })*/

  const navegation = useNavigation();

  return (
    <>
      <View style={styles.mainview}>
        <StatusBar backgroundColor={Colors.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={require('../assets/icoUser.png')}
            resizeMode="cover"
            style={styles.imagecover}
          />
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require('../assets/icoUser.png')}
            resizeMode="contain"
            style={styles.imagecontain}
          />

          <Text
            style={{ color: Colors.black, marginVertical: 8, }}>
            Nome Aleatorio
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              alignItems: "center",
            }}
          >
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text
              style={{
                marginLeft: 4,
              }}
            >
              Endrereço, qualquer
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 8,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 10,
              }}>
              <Text style={{ color: Colors.black, }}>
                21
              </Text>
              <Text style={{ color: Colors.black, }}>
                Idade
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 10,
              }}>
              <Text
                style={{ color: Colors.black, }}>
                55
              </Text>
              <Text
                style={{ color: Colors.black, }}>
                Pesso
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 10,
              }}>
              <Text style={{ color: Colors.black, }}>
                23/05
              </Text>
              <Text
                style={{ color: Colors.black, }}>
                Aniversario
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={infoUsuario} style={styles.btnprofile}>
              <Text style={{ color: Colors.white, }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {
        clientes.length <= 0 && (
          <Text>Carregando...</Text>
        )
      }
      {
        /*clientes.map((cliente) => (
          <ListItem key={cliente.id}>
            <ListItemContent>
              <Text>{cliente.nome}</Text>
              <Text>{cliente.nascimento}</Text>
            </ListItemContent>
          </ListItem>
        ))*/
      }

    </>
  );
};

