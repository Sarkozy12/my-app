import { ScrollView } from "react-native"
import { Text, Header } from "@rneui/themed"
import { Avatar, Button } from "@rneui/base"
import { useEffect, useState } from "react"
import axiosConfig from "../config/axios"
import { ListItem } from "react-native-elements"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title"
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle"
import { styles } from "./styles"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function Home ({ navigation}) {
    const [produtos, setProdutos] = useState([])

    useEffect (() => {
        axiosConfig.get("/products").then((Response) => {
            setProdutos(Response.data.products)
    })
}, [])
    return(
        <ScrollView>
            <SafeAreaProvider>
                <Header 
                    backgroundColor="#ff8c00"
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                        size: 38
                    }} 
                    centerComponent={{ text: 'Ativa Fitness', style: styles.heading }}
                    rightComponent={{
                        icon: 'person',
                        color: '#fff',
                        size: 38
                    }}
                    />
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
            </SafeAreaProvider>
        </ScrollView>
        )
}