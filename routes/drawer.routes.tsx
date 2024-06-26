import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather, AntDesign } from "@expo/vector-icons"
import Home from "../screens/Home";
import Sair from "../helpers/sair";
import Treino from "../screens/TreinoT";
import Profile from "../screens/userProfi";
import QrCode from "../screens/GerarQrCode";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {backgroundColor: '#ff8c00'},
                headerStyle: {
                    backgroundColor: '#ff8c00'
                }    
            }}>
            <Drawer.Screen 
                name="Home"
                component={Home}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen  
                name="Perfil"
                component={Profile}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerLabel: 'Meu Perfil'
                }}
            />
            <Drawer.Screen 
                name="Treino"
                component={Treino}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="book" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerLabel: 'Treino'
                }}
            />
            <Drawer.Screen 
                name="Acesso"
                component={QrCode}
                options={{
                    drawerIcon: ({color, size}) => <AntDesign name="qrcode" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerLabel: 'Acesso'
                }}
            />
            <Drawer.Screen 
                name="Logout"
                component={Sair}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="log-out" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerLabel: 'Sair'
                }}
            />
        </Drawer.Navigator>
    )
}