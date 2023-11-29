import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/styles";
import axiosConfig from "../config/axios";
import * as SecureStore from 'expo-secure-store';

import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

export default function Profile({ navigation }) {
  
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), "YYYY/MM/DD");

  const toUserData = () => {
    navigation.navigate('UserData')
  }

  const [cliente, setCliente] = useState([])

  async function infoUsuario() {

    const id = await SecureStore.getItemAsync('id')
    const token = await SecureStore.getItemAsync('token')

    axiosConfig.get('/clientes/' + id)
      .then((resposta) => {
        setCliente(resposta.data)
        console.log(resposta.data)
      })

  }

  useEffect(() => {
    infoUsuario()
  },)

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
            {cliente ? cliente.nome : ''}
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
              {cliente ? cliente.endereco : ''}
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
              {cliente ? (parseInt(startDate)-parseInt(cliente.nascimento)) : ''}
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
                {cliente ? cliente.peso : ''}
              </Text>
              <Text
                style={{ color: Colors.black, }}>
                Peso
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 10,
              }}>
              <Text style={{ color: Colors.black, }}>
                {cliente ? cliente.nascimento : ''}
              </Text>
              <Text
                style={{ color: Colors.black, }}>
                Aniversário
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={toUserData} style={styles.btnprofile}>
              <Text style={{ color: Colors.white, }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

