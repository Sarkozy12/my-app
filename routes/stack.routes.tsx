import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../screens/userProfile';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){

    return(
        <Stack.Navigator screenOptions={{title : ''}}>
            <Stack.Screen name="Usuário" component={User} />
        </Stack.Navigator>
    )
}