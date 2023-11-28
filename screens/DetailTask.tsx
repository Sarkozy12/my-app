import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-paper"
import React, { useEffect, useState } from "react";
import * as Animatable from 'react-native-animatable'
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/styles";
import axiosConfig from "../config/axios";
import * as SecureStore from 'expo-secure-store';


export default function DetailTask({ navigation, route }) {
  const navegation = useNavigation();
  const [description, setDescription] = useState(route.params.descricao)
  const [nome, setNome] = useState(route.params.nomeAula)
  const [dia, setDia] = useState(route.params.data)
  const idtask = route.params.id
  const [task, setTask] = useState([])

  async function putTask() {
 
    const id = await SecureStore.getItemAsync('id')
    const token = await SecureStore.getItemAsync('token')
 
    axiosConfig.put('/aulas/' + id, {
      nomeAula: nome,
      descricao: description,
      data: dia,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    }
    )
    .then((resposta) => {
      setTask(resposta.data)
      console.log(resposta.data)
      toUserProfile()
  })
}
const toUserProfile = () => {
  navigation.navigate('Drawer')
}

  return (
    <>
      <View style={styles.view}>
        <TouchableOpacity style={styles.btnback} onPress={() => navegation.goBack()}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={36}
            color={Colors.black}
          />
        </TouchableOpacity>
        <Text style={styles.profileTitle}>Editar</Text>
      </View>
      <Animatable.View style={style.container}>

        <View style={{ marginTop: 25, marginHorizontal: 25, justifyContent: "space-between", flexDirection: 'row', }}>

          <View style={{ width: "50%", }}>
            <Text>Atividade</Text>
            <TextInput
              mode='outlined'
              outlineColor="#ff8c00"
              activeOutlineColor="#000000"
              style={style.input}
              placeholder="Nome da Tarefa"
              onChangeText={setNome}
              value={nome}
            />
          </View>

          <View style={{ width: "45%" }}>
            <Text>Dia</Text>
            <TextInput
              mode='outlined'
              outlineColor="#ff8c00"
              activeOutlineColor="#000000"
              style={style.input}
              placeholder="Dia"
              onChangeText={setDia}
              value={dia}
            />
          </View>

        </View>

        <View style={{ marginHorizontal: 25 }}>
          <Text>Descrição</Text>
          <TextInput
            multiline
            mode='outlined'
            outlineColor="#ff8c00"
            activeOutlineColor="#000000"
            style={style.input2}
            onChangeText={value => setDescription(value)}
            defaultValue={description}
          />
        </View>

        <TouchableOpacity style={style.button} onPress={putTask}>
          <Text style={style.buttonText}>Salvar</Text>
        </TouchableOpacity>

      </Animatable.View >
    </>
  );
};

const style = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    height: 48,
    marginBottom: 12,
    fontSize: 16,
  },

  input2: {
    borderBottomWidth: 1,
    height: 350,
    marginBottom: 12,
    fontSize: 16,

  },

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

  button: {
    backgroundColor: '#ff8c00',
    width: '80%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

})