import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Login from '../components/Login';
import Produto from '../components/Produto';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Produto" component={Produto} />
        </Stack.Navigator>
    )
}