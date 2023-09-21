import { View } from "react-native"
import { Text } from "@rneui/themed"
import { Button } from "@rneui/base"

export default function Home({ navigation }){
    return(
        <View>
            <Text h1>Home</Text>
            <Button title='Sair' onPress={
                () => navigation.navigate('Login')
            } />
        </View>
    )
}