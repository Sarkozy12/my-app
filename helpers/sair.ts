
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from 'expo-secure-store';
    
async function DeleteToken() {
    await SecureStore.deleteItemAsync('token')
    await AsyncStorage.removeItem('user')
}

export default function Sair({navigation}){

    DeleteToken()

    return(
        navigation.navigate('Login')
    )
}