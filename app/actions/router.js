/**
 * Created by Sudarshana Lakmal on 10/9/2017.
 */

import {
    StackNavigator,
} from 'react-navigation';
import {Login} from "../screens/login/Login";
import {DashBoard} from "../screens/dashboard/DashBoardHome";

const MyApp = StackNavigator({
    Home: { screen: Login },
    Profile: { screen: DashBoard },
});

export default MyApp;
AppRegistry.registerComponent('MyApp', () => MyApp);
