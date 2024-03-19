import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialIcons } from "@expo/vector-icons"
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { styles } from '../components/styles';
import * as SecureStore from 'expo-secure-store';
import axiosConfig from '../config/axios';
import { Overlay } from '@rneui/themed';
import { Icon } from 'react-native-elements';


export default function Userdata({ navigation }) {

  const [cliente, setCliente] = useState([])
  const [visivel, setVisivel] = useState(false)

  async function infoUsuario() {

    const id = await SecureStore.getItemAsync('id')
    const token = await SecureStore.getItemAsync('token')

    axiosConfig.get('/clientes/' + id)
      .then((resposta) => {
        setCliente(resposta.data)
        console.log(resposta)
      })

  }

  async function putCliente() {
 
    const id = await SecureStore.getItemAsync('id')
    const token = await SecureStore.getItemAsync('token')
 
    axiosConfig.put('/clientes/' + id, {
      nome: name,
      peso: peso,
      altura: altura,
      endereco: local,
      telefone: fone,
      usuario: email
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    }
    )
    .then((resposta) => {
      setCliente(resposta.data)
      console.log(resposta.data)
      toUserProfile()
  })
}

  useEffect(() => {
    infoUsuario()
    setName(cliente.nome)
    setEmail(cliente.usuario)
    setPassword(cliente.senha)
    setFone(cliente.telefone)
    setLocal(cliente.endereco)
    setId(cliente.id)
    setPeso(cliente.peso)
    setAltura(cliente.altura)
  }, [])

  const [id, setId] = useState("")
  const [name, setName] = useState("");
  const [peso, setPeso] = useState(''); 
  const [altura, setAltura] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fone, setFone] = useState("");
  const [local, setLocal] = useState("");
  const navegation = useNavigation();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), "YYYY/MM/DD");
  const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const handleChangeStartDate = (propDate: React.SetStateAction<string>) => {
    setStartedDate(propDate);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  function renderDatePicker() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={styles.calendario}
          >
            <DatePicker
              mode="calendar"
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: Colors.black,
                textHeaderColor: "#469ab6",
                textDefaultColor: Colors.white,
                selectedTextColor: Colors.white,
                mainColor: "#469ab6",
                textSecondaryColor: Colors.white,
                borderColor: "rgba(122,146,165,0.1)",
              }}
            />

            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text style={{ color: Colors.white }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  const toUserProfile = () => {
    navigation.navigate('Drawer')
  }

  const notification = () => {
    setVisivel(!visivel)
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
        <Text style={styles.profileTitle}>Profile</Text>
      </View>
      <Animatable.View animation='fadeInUp' style={styles.containerUserData}>
        <ScrollView>
          <View style={styles.scrollview}>
            <TouchableOpacity>
              <Animatable.Image
                style={styles.imageUser}
                source={require('../assets/icoUser.png')}
                animation='flipInY'
              />
            </TouchableOpacity>
          </View>

          <View>
            <Overlay isVisible={visivel} onBackdropPress={notification}>
              <Icon name='warning' size={50}></Icon>
              <Text style={styles.footerText}>PREENCHA TODOS OS CAMPOS!</Text>
            </Overlay>
          </View>

          <View>
            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Nome</Text>
              <View style={styles.inputArea} >
                <TextInput
                  defaultValue={cliente.nome}
                  editable={true}
                  onChangeText={value => setName(value)} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Usuario</Text>
              <View style={styles.inputArea} >
                <TextInput
                  defaultValue={cliente.usuario}
                  editable={true}
                  onChangeText={value => setEmail(value)} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Telefone</Text>
              <View style={styles.inputArea} >
                <TextInput
                  defaultValue={cliente.telefone}
                  editable={true}
                  onChangeText={value => setFone(value)} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Endereço</Text>
              <View style={styles.inputArea} >
                <TextInput
                  defaultValue={cliente.endereco}
                  editable={true}
                  onChangeText={value => setLocal(value)} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6, }}>
              <Text>Data de Nascimento</Text>
              <TouchableOpacity
                onPress={handleOnPressStartDate}
                style={styles.dataStyle}>
                <Text>{cliente.nascimento}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Peso</Text>
              <View style={styles.inputArea} >
                <TextInput
                  defaultValue={cliente.peso}
                  editable={true}
                  onChangeText={value => toString(setPeso(value))} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6}}>
              <Text>Altura</Text>
              <View style={styles.inputArea}>
                <TextInput
                defaultValue={cliente.altura}
                editable={true}
                onChangeText={value => toString(setAltura(value))}/>
              </View>
            </View>

          </View>

          <TouchableOpacity onPress={putCliente}
            style={styles.btnSave}>
            <Text>Save Change</Text>
          </TouchableOpacity>

          {renderDatePicker()}
        </ScrollView>
      </Animatable.View>
    </>
  );
}
