import { Text } from "@rneui/themed"
import { Avatar } from "@rneui/base"
import { ScrollView } from "react-native-gesture-handler"

export default function Produto ({route, navigation}){
    const {produto} = route.params
    return (
        <ScrollView>
        <Text h1>{produto.title}</Text>
        <Text h3>${produto.price}</Text>
        </ScrollView>
    )
}