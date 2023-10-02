import { View } from "react-native";
import { Icon, ListItem } from "react-native-elements";


export default function SideBar({navigation}){

    return(
        <View style={{alignSelf: "flex-end", width: "50%"}}>
            <ListItem >
                <Icon name="home"/>
                    <ListItem.Content>
                        <ListItem.Title>Home</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
            </ListItem>
            <ListItem >
                <Icon name="person" />
                    <ListItem.Content>
                        <ListItem.Title>Usuário</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
            </ListItem>
            <ListItem >
                <Icon name="book" />
                    <ListItem.Content>
                        <ListItem.Title>Treino</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
            </ListItem>
            <ListItem>
                <></>
            </ListItem>
            <ListItem onPress={() => navigation.navigate('Login')} >
                <Icon name="logout" />
                    <ListItem.Content>
                        <ListItem.Title>Sair</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
            </ListItem>
        </View>
    )
}