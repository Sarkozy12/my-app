import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialIcons } from "@expo/vector-icons"
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

export default function Userdata() {
    
    const [name,setName] = useState("Nome Temporario");
    const [email,setEmail] = useState("email@email.com");
    const [password,setPassword] = useState("123abc");
    const [fone,setFone] = useState("000000000");
    const [local,setLocal] = useState("Cidade X, Rua X, Numero X.");
    const navegation = useNavigation();
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const today = new Date();
    const startDate = getFormatedDate( today.setDate(today.getDate() + 1), "YYYY/MM/DD" );
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
            style={ style.calendario }
          >
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
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

    return (

        <Animatable.View animation='fadeInUp' style={style.container}>
            <View style={style.view}> 
                <TouchableOpacity style={style.btnback} onPress={()=>navegation.goBack()}>
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={24}
                        color={Colors.black}
                    />
                </TouchableOpacity>
                <Text>Profile</Text>
            </View>
            
            <ScrollView>
                <View style={style.scrollview}>
                    <TouchableOpacity>
                        <Animatable.Image 
                        style={style.imageUser} 
                        source={require('../../../assets/icoUser.png')}
                        animation='flipInY' 
                        />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={{ flexDirection: "column", marginBottom: 6 }} >
                        <Text>Nome</Text>
                            <View style={style.inputArea} >
                                <TextInput 
                                value={name} 
                                editable={true} 
                                onChangeText={value=>setName(value)} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", marginBottom: 6 }} >
                        <Text>Email</Text>
                            <View style={style.inputArea} >
                                <TextInput 
                                value={email} 
                                editable={true} 
                                onChangeText={value=>setEmail(value)} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", marginBottom: 6 }} >
                        <Text>Senha</Text>
                            <View style={style.inputArea} >
                                <TextInput 
                                value={password} 
                                editable={true} 
                                onChangeText={value=>setPassword(value)} 
                                secureTextEntry
                                />
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", marginBottom: 6 }} >
                        <Text>Telefone</Text>
                            <View style={style.inputArea} >
                                <TextInput 
                                value={fone} 
                                editable={true} 
                                onChangeText={value=>setFone(value)} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", marginBottom: 6 }} >
                        <Text>Endereço</Text>
                            <View style={style.inputArea} >
                                <TextInput 
                                value={local} 
                                editable={true} 
                                onChangeText={value=>setLocal(value)} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", marginBottom: 6, }}>
                    <Text>Date de Aniversario</Text>
                    <TouchableOpacity
                    onPress={handleOnPressStartDate}
                    style={ style.dataStyle }>
                    <Text>{selectedStartDate}</Text>
                    </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity onPress={ () => navegation.navigate("Userprofile")}
                     style={ style.btnSave }>
                <Text>Save Change</Text>
                </TouchableOpacity>

                {renderDatePicker()}
            </ScrollView>
        </Animatable.View>

    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 22,
    },

    btnSave:{
        backgroundColor: '#ff8c00',
        height: 44,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center", 
    },

    dataStyle:{
        height: 44,
        width: "100%",
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 6,
        justifyContent: "center",
        paddingLeft: 8,
    },

    view: {
        marginHorizontal: 12,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    btnback: {
        position: 'absolute',
        left: 0,
    },

    scrollview: {
        alignItems: 'center',
        marginVertical: 22,
    },

    imageUser: {
        height: 170,
        width: 170,
        borderRadius: 85,
        borderWidth: 2,
        borderColor: Colors.black,
    },

    calendario: {
        margin: 20,
        backgroundColor: Colors.black,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 35,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    inputArea: {
        height: 44,
        width: "100%",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.gray,
        marginVertical: 6,
        justifyContent: "center",
        paddingLeft: 8,
    }

})