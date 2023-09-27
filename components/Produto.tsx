import { Text } from "@rneui/themed"

export default function Produto({route, navigation}){
    const {produto} = route.params
    return (
        <>
        <Text h1>{produto.title}</Text>
        <Text h3>{produto.price}</Text>
        </>
    )
}