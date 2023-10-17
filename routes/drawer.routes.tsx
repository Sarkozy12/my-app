import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons"
import Home from "../components/Home";
import StackRoutes from "./stack.routes";
import { styles } from "../components/styles";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen 
                name="home"
                component={Home}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerInactiveBackgroundColor: '#ff8c00',
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen 
                name="telas"
                component={StackRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
                    drawerActiveBackgroundColor: '#ff8c00',
                    drawerActiveTintColor: 'white',
                    drawerInactiveBackgroundColor: '#ff8c00',
                    drawerLabel: 'Meu Perfil'
                }}
            />
        </Drawer.Navigator>
    )
}