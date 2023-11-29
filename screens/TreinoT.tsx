import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from "react-native";
import { ListItem } from "@rneui/themed"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"
import React, { useState, useEffect } from "react";
import * as Animatable from 'react-native-animatable'
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import axiosConfig from "../config/axios";
import * as SecureStore from 'expo-secure-store';

export default function Trening({ navigation }) {
  const [task, setTask] = useState([]);
  const [visivel, setVisivel] = useState(false)

  function infoTreino() {

    axiosConfig.get('/aulas/')
      .then((resposta) => {
        setTask(resposta.data)
        console.log(resposta)
      })

  }
  function deleteTask(id: any) {

    axiosConfig.delete('/aulas/' + id)
      .then((resposta) => {
        console.log(resposta)
        infoTreino()
      })
  }

  useEffect(() => {

    infoTreino()
  })

  const navegation = useNavigation();

  return (
    <Animatable.View style={style.container}>

      {
        task.length <= 0 && (
          <Text>Nenhuma aula encontrada!</Text>
        )
      }
      {
        task.map((aula) => (

          <ListItem key={aula.id}>
            <TouchableOpacity style={style.btnDeleteT}
              onPress={() => {
              deleteTask(aula.id)
              }}>
              <Entypo name="cup" size={25} color="black"/>
            </TouchableOpacity>

            <Text onPress={() => {
              navigation.navigate("Detailtask", {
                id: aula.id,
                nomeAula: aula.nomeAula,
                descricao: aula.descricao,
                data: aula.data
              })
            }}
              style={style.Tasktext}>
              {aula.data}/{aula.nomeAula}
            </Text>
          </ListItem>
        ))
      }



      <TouchableOpacity style={style.btnPlus} onPress={() => { navigation.navigate("NewTask") }}>
        <Text style={{ fontSize: 30, color: 'black', }} >+</Text>
      </TouchableOpacity>

    </Animatable.View >
  );
};

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  view: {
    backgroundColor: '#ff8c00',
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  btnback: {
    position: 'absolute',
    left: 0,
  },

  btnPlus: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: "#ff8c00",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnDeleteT: {
    width: "auto",
    justifyContent: "center",


  },

  Task: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  Tasktext: {
    width: "100%",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 5,
    marginRight: 15,
    color: "black",
  }

})