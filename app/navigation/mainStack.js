import React from 'react';
import {TeamHomePage} from "../screens/TeamHomePage";
import {StackNavigator, TabBarBottom, TabBarTop, TabNavigator} from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import {View} from "react-native";
import Text from "react-native-elements/src/text/Text";


const defaultHeader = {
    headerStyle: {
        backgroundColor: '#3D6DCC',
        shadowOpacity: 0,
        elevation: 0,
        height:50,
        paddingBottom:0,
    },
    headerTitleStyle: {
        alignSelf: 'flex-start',
        fontSize: 19
    },
    headerTintColor: 'white',
    headerBackTitle: null
};

export const TabBarComponent = new TabNavigator(
    {
        LiveMatches: {
            screen: TeamHomePage,
            navigationOptions: {
                header: null,
                title: "Live",
                tabBarIcon : ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
                        size={26}
                        style={{ color: '#264d9b' }}
                    />
                ),
            }
        },
        UpComingMatches: {
            screen: TeamHomePage,
            navigationOptions: {
                tabBarLabel: 'UpComing',
                tabBarIcon : ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-trophy' : 'ios-trophy-outline'}
                        size={26}
                        style={{ color: '#264d9b' }}
                    />
                ),

            }
        },
        PastMatches: {
            screen: TeamHomePage,
            navigationOptions: {
                tabBarLabel: 'Past',
                tabBarIcon : ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
                        size={26}
                        style={{ color: '#264d9b' }}
                    />
                ),
            }
        }
    },
    {
        tabBarOptions: {
            header: null,
            showIcon: true,
            mode:'modal',
            scrollEnabled: true


        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
    }
);
export const HomeMainNavigationStack = StackNavigator({
    tabBar: { screen: TabBarComponent,
        navigationOptions: {
            header: null
        }
    }
},{
    initialRouteName: 'tabBar',
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: {
        ...defaultHeader
    }
});

export const MainNavigation = StackNavigator({
    homeMainNav: { screen: HomeMainNavigationStack,
        navigationOptions: {
            header: null
        }
    },
});



export default MainNavigation;

