import { ScrollView } from "react-native"
import { Text } from "@rneui/themed"
import { Avatar, Button, ListItem } from "@rneui/base"
import { useEffect, useState } from "react"
import axiosConfig from "../config/axios"
import { Divider } from "react-native-elements"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title"
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle"

export default function Home({ navigation }){
    const [produtos, setProdutos] = useState([])

    useEffect(()=> {
        axiosConfig.get('products').then((resposta)=>{
            setProdutos(resposta.data.products)
        })
    },[])
    return(
        <ScrollView>
            <Text h1>Home</Text>
            <Divider />
            {
                produtos.length <= 0 && (
                    <Text>Nenhum produto encontrado!</Text>
                )
            }
            {
                produtos.map((produto) => (
                    <ListItem key={produto.id} onPress={() => {
                        navigation.navigate("Produto", {produto})
                    }}>
                        <Avatar source={{uri: produto.thumbnail}} />
                        <ListItemContent>
                            <ListItemTitle>
                                <Text>{produto.title}</Text>
                            </ListItemTitle>
                            <ListItemSubtitle>
                                <Text>${produto.price}</Text>
                            </ListItemSubtitle>
                        </ListItemContent>
                    </ListItem>
                ))
            }
            <Button title='Sair' onPress={
                () => navigation.navigate('Login')
            } />
        </ScrollView>
    )
}