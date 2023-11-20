import { ScrollView, ActivityIndicator, View, Linking } from "react-native"
import { Text, SearchBar, Image, FAB, ListItem } from "@rneui/themed"
import { useEffect, useState } from "react"
import axiosConfig from "../config/axios"
import { Divider, PricingCard, SocialIcon } from "react-native-elements"
import { styles } from "../components/styles"
import { SafeAreaProvider } from "react-native-safe-area-context"

import * as SecureStore from 'expo-secure-store';
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"

const Imagem_URI = 'https://img.freepik.com/fotos-gratis/mulher-jovem-e-bonita-desportiva-a-treinar-no-ginasio_155003-41224.jpg?w=1380&t=st=1696191659~exp=1696192259~hmac=3b5f66d41a5593043816f60d463318b4d034f53cf45072dcd5b1d98793545d23'

export default function Home({ navigation }) {
    const [aulas, setAulas] = useState([])

    useEffect(() => {
        axiosConfig.get('/aulas').then((resposta) => {
            console.log(resposta.data)
            setAulas(resposta.data)
        })
    }, [])

    return (
        <ScrollView style={{ backgroundColor: 'grey' }}>
            <SafeAreaProvider>
                <SearchBar
                    placeholder="Pesquisar"
                    containerStyle={{ backgroundColor: '#ff8c00' }}
                    inputStyle={{ backgroundColor: '#fff' }}
                    leftIconContainerStyle={{ backgroundColor: "#fff" }}
                    inputContainerStyle={{ backgroundColor: "#fff" }}
                    round={true}
                    lightTheme={false}
                />
                <Image
                    source={{ uri: Imagem_URI }}
                    containerStyle={styles.imagemHome}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <PricingCard
                    color="#ff8c00"
                    title="Treino Funcional"
                    price="R$75,00"
                    info={['Venha se exercitar de forma personalizada!', 'E com acompanhamento pessoal!']}
                    button={{ title: ' Inscreva-se agora', icon: 'person' }}
                />
                <PricingCard
                    color="#ff8c00"
                    title="Musculação/Aeróbico"
                    price="R$70,00"
                    info={['Tenha acesso livre aos equipamentos de musculação e aeróbico. E auxílio de profissionais capacitados!']}
                    button={{ title: ' Inscreva-se agora', icon: 'person' }}
                />
                <PricingCard
                    color="#ff8c00"
                    title="Jiu-Jitsu"
                    price="R$65,00"
                    info={['Aprenda e pratique uma arte marcial.']}
                    button={{ title: ' Inscreva-se agora', icon: 'person' }}
                />
                <PricingCard
                    color="#ff8c00"
                    title="Natação"
                    price="R$60,00"
                    info={['Aprenda e pratique natação já!', 'Para diversas idades.']}
                    button={{ title: ' Inscreva-se agora', icon: 'person' }}
                />
                {
                    aulas.length <= 0 && (
                        <Text>Nenhuma aula encontrada!</Text>
                    )
                }
                {
                    aulas.map((aula) => (
                        <ListItem key={aula.id}>
                            <ListItemContent>
                                <Text>{aula.descricao}</Text>
                                <Text>{aula.nomeAula}</Text>
                                <Text>{aula.limiteAlunos}</Text>
                                <Text>{aula.data}</Text>
                            </ListItemContent>
                        </ListItem>
                    ))
                }
                <Divider
                    width={2}
                    color="#000"
                />
                <View style={styles.container}>
                    <Text style={styles.footerText}>Nos siga e venha conhecer</Text>
                </View>
                <View style={styles.socialIcons}>
                    <SocialIcon
                        type="facebook"
                        onPress={() => Linking.openURL('https://www.facebook.com/AtivaFitnessCardeal/')}
                    />
                    <SocialIcon
                        type="instagram"
                        onPress={() => Linking.openURL('https://www.instagram.com/ativa.fitnesscardeal/?hl=af')}
                    />
                    <FAB
                        visible={true}
                        icon={{ name: 'place', color: 'white' }}
                        size="large"
                        onPress={() => Linking.openURL('https://maps.app.goo.gl/7AF1T5pxLTGDJj2t8')}
                    />
                </View>
            </SafeAreaProvider>
        </ScrollView>
    )
}