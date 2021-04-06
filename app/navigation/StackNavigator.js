import {createStackNavigator} from 'react-navigation-stack';
import SignupScreen from './SignupScreen';
import SigninScreen from './SigninScreen';
import IntroScreen from './IntroScreen';


const StackNavigator = createStackNavigator({
    Start: IntroScreen,
    Register: SignupScreen,
    Signin: SigninScreen,
});

export default StackNavigator;