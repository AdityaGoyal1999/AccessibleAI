import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from '../screens/LoginPage';
import Dashboard from '../screens/Dashboard';


const screens = {
    LoginPage: {
        screen: LoginPage,
    },
    Dashboard: {
        screen: Dashboard,
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);