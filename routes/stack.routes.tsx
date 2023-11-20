import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerRoutes from './drawer.routes';
import Login from '../components/Login';
import login from '../screens/login';
import Userdata from '../screens/userData';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown : false
        }}>
            <Stack.Screen name="login" component={login} />
            <Stack.Screen name="Drawer" component={DrawerRoutes} />
            <Stack.Screen name="UserData" component={Userdata} />
        </Stack.Navigator>
    )
}