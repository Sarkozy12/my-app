
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from 'expo-secure-store';
import { useEffect } from "react";
    
export default function Sair({navigation}){
async function DeleteToken() {
    await SecureStore.deleteItemAsync('token')
    await AsyncStorage.removeItem('user')
    navigation.navigate('login')
}
    

    useEffect(() => {
        DeleteToken()
    },[])

    return(
        <></>
    )
}