import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialIcons } from "@expo/vector-icons"
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { styles } from '../components/styles';

export default function Userdata({ navigation }) {

  const [name, setName] = useState("Nome Temporario");
  const [email, setEmail] = useState("email@email.com");
  const [password, setPassword] = useState("123abc");
  const [fone, setFone] = useState("000000000");
  const [local, setLocal] = useState("Cidade X, Rua X, Numero X.");
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
            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Nome</Text>
              <View style={styles.inputArea} >
                <TextInput
                  value={name}
                  editable={true}
                  onChangeText={value => setName(value)} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Email</Text>
              <View style={styles.inputArea} >
                <TextInput
                  value={email}
                  editable={true}
                  onChangeText={value => setEmail(value)} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Senha</Text>
              <View style={styles.inputArea} >
                <TextInput
                  value={password}
                  editable={true}
                  onChangeText={value => setPassword(value)}
                  secureTextEntry
                />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Telefone</Text>
              <View style={styles.inputArea} >
                <TextInput
                  value={fone}
                  editable={true}
                  onChangeText={value => setFone(value)} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6 }} >
              <Text>Endereço</Text>
              <View style={styles.inputArea} >
                <TextInput
                  value={local}
                  editable={true}
                  onChangeText={value => setLocal(value)} />
              </View>
            </View>

            <View style={{ flexDirection: "column", marginBottom: 6, }}>
              <Text>Data de Aniversario</Text>
              <TouchableOpacity
                onPress={handleOnPressStartDate}
                style={styles.dataStyle}>
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>

          </View>

          <TouchableOpacity onPress={toUserProfile}
            style={styles.btnSave}>
            <Text>Save Change</Text>
          </TouchableOpacity>

          {renderDatePicker()}
        </ScrollView>
      </Animatable.View>
    </>
  );
}
