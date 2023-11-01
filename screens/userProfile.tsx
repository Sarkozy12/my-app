import React, { useState } from 'react';
import { ScrollView, View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Header, Icon } from '@rneui/themed';
import SideBar from "../components/menuSidebar";

const adminData = {
  name: 'Admin',
  phoneNumber: '123-456-7890',
  address: '123 Main Street',
};

export default function UserProfile({ navigation }) {
  const [sideBar, setSideBar] = useState(false);
  const [userData, setUserData] = useState(adminData);
  const [isEditMode, setIsEditMode] = useState(false);

  const saveChanges = () => {
    setIsEditMode(false);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        backgroundColor="#ff8c00"
        leftComponent={
          <View>
            <Icon
              name="logout"
              color="#000"
              size={34}
              onPress={() => navigation.goBack()}
            />
          </View>
        }
        centerComponent={{ text: 'Meu Perfil' }}
        rightComponent={
          <View>
            <Icon
              name="menu"
              color="#000"
              size={34}
              onPress={() => {
                setSideBar(!sideBar);
              }}
            />
            {sideBar && <SideBar navigation={navigation}></SideBar>}
          </View>
        }
      />

      <View style={{ padding: 30 }}>
        {isEditMode ? (
          <>
            <TextInput
              placeholder="Nome"
              value={userData.name}
              onChangeText={(text) => setUserData({ ...userData, name: text })}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Telefone"
              value={userData.phoneNumber}
              onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Endereço"
              value={userData.address}
              onChangeText={(text) => setUserData({ ...userData, address: text })}
              style={styles.textInput}
            />
          </>
        ) : (
          <>
            <Text>Nome: {userData.name}</Text>
            <Text>Telefone: {userData.phoneNumber}</Text>
            <Text>Endereço: {userData.address}</Text>
          </>
        )}

        <View style={{ width: 110, height: 50, marginTop: 20 }}>
          <Button
            title={isEditMode ? "Salvar" : "Editar"}
            onPress={() => setIsEditMode(!isEditMode)}
            color="#ff8c00"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 25,
  },
});
