import { View } from "react-native";
import sair from "../helpers/sair";
import { Icon, ListItem } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';


export default function SideBar({navigation}){

    const estiloGradiente={
        colors: ["#FF8C00", "#F44336"],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 },
    }

    return(
        <View style={{alignSelf: "flex-start", width: "200%"}} >
            <ListItem 
                linearGradientProps={estiloGradiente}
                ViewComponent={LinearGradient}
             >
                <Icon name="home"/>
                    <ListItem.Content>
                        <ListItem.Title>Home</ListItem.Title>
                    </ListItem.Content>
            </ListItem>
            <ListItem  
                linearGradientProps={estiloGradiente}
                ViewComponent={LinearGradient}
            >
                <Icon name="person" />
                    <ListItem.Content>
                        <ListItem.Title>Usuário</ListItem.Title>
                    </ListItem.Content>
            </ListItem>
            <ListItem 
                linearGradientProps={estiloGradiente}
                ViewComponent={LinearGradient}
            >
                <Icon name="book" />
                    <ListItem.Content>
                        <ListItem.Title>Treino</ListItem.Title>
                    </ListItem.Content>
            </ListItem>
            <ListItem 
                linearGradientProps={estiloGradiente}
                ViewComponent={LinearGradient}
            >
                <></>
            </ListItem>
            <ListItem onPress={() => {
                sair(navigation)
                }} 
                linearGradientProps={estiloGradiente}
                ViewComponent={LinearGradient}
            >
                <Icon name="logout" />
                    <ListItem.Content>
                        <ListItem.Title>Sair</ListItem.Title>
                    </ListItem.Content>
            </ListItem>
        </View>
    )
}