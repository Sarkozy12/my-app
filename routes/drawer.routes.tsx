import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons"
import Home from "../screens/Home";
import User from "../screens/userProfile";
import Sair from "../helpers/sair";
import Treino from "../screens/treino";

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
                component={User}
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