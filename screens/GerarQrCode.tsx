import QRCode from 'react-native-qrcode-svg'
import * as Animatable from 'react-native-animatable'
import { ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store'
import React, { useEffect, useState } from "react"
import Loading from '../helpers/Loading.tsx'

export default function({ navigation }){

    const [token, setToken] = useState("")
    const [carregando, setCarregando] = useState(true)
    const [conteudo, setConteudo] = useState('tf');

    useEffect(()=>{
        async function getToken () {
            const tokenArmazenado = await SecureStore.getItemAsync('token')
            console.log(tokenArmazenado)
            setToken(tokenArmazenado)
        }

        getToken().then(() => {
            carregaConteudo();
            //console.log(conteudo)
        });
    })

    function carregaConteudo(){
        
        if(token != "")
        {
            setCarregando(false)
            setConteudo(token)
            console.log(conteudo)
        }
        else
        {
            setCarregando(true)
        }
    }

    return(

        <ScrollView>
            <Animatable.View animation="fadeIn" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {carregando ? (
                    <Loading />
                    ) : (
                    <QRCode value={conteudo} size={200} />
                )}
                
            </Animatable.View>
        </ScrollView>
    )
}