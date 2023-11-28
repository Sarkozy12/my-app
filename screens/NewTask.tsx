import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { TextInput } from "react-native-paper"
import React, { useEffect, useState } from "react";
import * as Animatable from 'react-native-animatable'
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/styles";
import axiosConfig from "../config/axios";
import * as SecureStore from 'expo-secure-store';


export default function NewTask({ navigation }) {
    const navegation = useNavigation();
    const [task, setTask] = useState([])


    async function postTask() {

        const id = await SecureStore.getItemAsync('id')
        const token = await SecureStore.getItemAsync('token')

        axiosConfig.post('/aulas/', {
            nomeAula: nomeAula,
            descricao: descricao,
            data: data,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        }
        )
            .then((resposta) => {
                setTask(resposta.data)
                console.log(resposta.data)
                toUserProfile()
            })
    }


    useEffect(() => {
        setNome(task.nomeAula)
        setDescricao(task.descricao)
        setData(task.data)
        setId(task.id)
    }, [])

    const [nomeAula, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data, setData] = useState("")
    const [id, setId] = useState("")

    const toUserProfile = () => {
        navigation.navigate('Drawer')
      }
    return (
        <>
            <View style={styles.view}>
                <TouchableOpacity style={styles.btnback} onPress={() => navegation.goBack()}>
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={36}
                        color={Colors.black}
                    />
                </TouchableOpacity>
                <Text style={styles.profileTitle}>Novo Treino</Text>
            </View>
            <Animatable.View style={style.container}>

                <View style={{ marginTop: 25, marginHorizontal: 25, justifyContent: "space-between", flexDirection: 'row', }}>

                    <View style={{ width: "50%", }}>
                        <Text>Atividade</Text>
                        <TextInput
                            mode='outlined'
                            outlineColor="#ff8c00"
                            activeOutlineColor="#000000"
                            style={style.input}
                            placeholder="Nome da Tarefa"
                            editable={true}
                            onChangeText={value => setNome(value)}
                            defaultValue={""}
                        />
                    </View>

                    <View style={{ width: "45%" }}>
                        <Text>Dia</Text>
                        <TextInput
                            mode='outlined'
                            outlineColor="#ff8c00"
                            activeOutlineColor="#000000"
                            style={style.input}
                            placeholder="Dia"
                            editable={true}
                            onChangeText={value => setData(value)}
                            defaultValue={""}
                        />
                    </View>

                </View>

                <View style={{ marginHorizontal: 25 }}>
                    <Text>Descrição</Text>
                    <TextInput
                        multiline
                        mode='outlined'
                        outlineColor="#ff8c00"
                        activeOutlineColor="#000000"
                        style={style.input2}
                        editable={true}
                        onChangeText={value => setDescricao(value)}
                        defaultValue={""}
                    />
                </View>

                <TouchableOpacity style={style.button} onPress={postTask}>
                    <Text style={style.buttonText}>Criar Atividade</Text>
                </TouchableOpacity>

            </Animatable.View >
        </>
    );
};

const style = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        height: 48,
        marginBottom: 12,
        fontSize: 16,
    },

    input2: {
        borderBottomWidth: 1,
        height: 350,
        marginBottom: 12,
        fontSize: 16,

    },

    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    view: {
        backgroundColor: '#ff8c00',
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    btnback: {
        position: 'absolute',
        left: 0,
    },

    button: {
        backgroundColor: '#ff8c00',
        width: '80%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

})