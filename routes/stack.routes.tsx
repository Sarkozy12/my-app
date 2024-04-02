import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerRoutes from './drawer.routes';
import login from '../screens/login';
import Userdata from '../screens/userData';
import DetailTask from '../screens/DetailTask'
import NewTask from '../screens/NewTask';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown : false
        }}>
            <Stack.Screen name="login" component={login} />
            <Stack.Screen name="Drawer" component={DrawerRoutes} />
            <Stack.Screen name="UserData" component={Userdata} />
            <Stack.Screen name="Detailtask" component={DetailTask} />
            <Stack.Screen name="NewTask" component={NewTask} />
        </Stack.Navigator>
    )
}