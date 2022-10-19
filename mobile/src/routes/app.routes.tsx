import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Game } from '../screens/Game';

//criar navegação, informar qual componente retornar
const { Navigator, Screen } = createNativeStackNavigator();

//criar rota
export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen  
                name='home'
                component={Home}
            />
            <Screen  
                name='game'
                component={Game}
            />
        </Navigator>
    );
};