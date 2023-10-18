import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons"
import Home from "../components/Home";
import User from "../screens/userProfile";
import Sair from "../helpers/sair";
import Treino from "../screens/treino";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title: '', drawerStyle: {backgroundColor: '#ff8c00'}}}>
            <Drawer.Screen 
                name="home"
                component={Home}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen 
                name="perfil"
                component={User}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerLabel: 'Meu Perfil'
                }}
            />
            <Drawer.Screen 
                name="treino"
                component={Treino}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="book" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerLabel: 'Treino'
                }}
            />
            <Drawer.Screen 
                name="logout"
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