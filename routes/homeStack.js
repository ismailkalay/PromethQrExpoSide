import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";


import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";

const screens = {
    promethtech: {
        screen: SignIn,
    },
    KullanıcıKaydı: {
        screen: SignUp,
    },
    PromethQr: {
        screen: Home,
    }
}

const homeStack = createStackNavigator(
    screens,
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#009387",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign:'center',
                fontWeight: 'bold',
            },
        },
    },
    {initialRouteName: 'promethtech'}
    );

export default createAppContainer(homeStack);