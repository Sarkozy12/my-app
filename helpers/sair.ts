
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from 'expo-secure-store';

export default async function Sair(navigation) {
    await SecureStore.deleteItemAsync('token')
    await AsyncStorage.removeItem('user')
    navigation.navigate('Login')
}