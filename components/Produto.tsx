import { Text } from "@rneui/themed"
import { Avatar } from "@rneui/base"

export default function Produto({route, navigation}){
    const {produto} = route.params
    return (
        <>
        <Text h1>{produto.title}</Text>
        <Avatar source={{uri: produto.thumbnail}} size={250} />
        <Text h2>${produto.price}</Text>
        </>
    )
}