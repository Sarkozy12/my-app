import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React, { useState } from "react";
  import { StatusBar } from "expo-status-bar";
  import { MaterialIcons } from "@expo/vector-icons";
  import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
  
  export default function Profile () {
    const navegation = useNavigation();
  
    return (
      <View style={style.mainview}>
        <StatusBar backgroundColor={Colors.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={require('../assets/icoUser.png')}
            resizeMode="cover"
            style={style.imagecover}
          />
        </View>
  
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require('../assets/icoUser.png')}
            resizeMode="contain"
            style={style.imagecontain}
          />
  
          <Text
            style={{ color: Colors.black, marginVertical: 8,}}>
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
            <TouchableOpacity onPress={ () => navegation.navigate("Userdata")} style={style.btnprofile}>
              <Text style={{ color: Colors.white,}}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
};

const style = StyleSheet.create({
  
  photoview:{
    flex: 1,
    aspectRatio: 1,
    margin: 3,
  },

  image:{ 
    width: "100%", 
    height: "100%", 
    borderRadius: 12 
  },

  mainview:{ 
    flex: 1, 
    backgroundColor: Colors.white, 
  },

  imagecover:{
    height: 228,
    width: "100%",
  },
  
  btnprofile:{
    width: 124,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ff8c00',
    borderRadius: 10,
    marginHorizontal: 20,
  },

  imagecontain:{
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: '#ff8c00',
    borderWidth: 2,
    marginTop: -90,
  }

})