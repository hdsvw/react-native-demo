import {Platform, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StackNavigator, TabBarBottom, TabBarTop, TabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {DashBoardHome} from '../screens/dashboard/DashBoardHome';
import {RequestsHome} from '../screens/requests/RequestsHome';
import {ScheduleHome} from "../screens/schedule/ScheduleHome";
import {Login} from "../screens/login/Login";
import LeaveRequest from "../screens/requests/LeaveRequest";
import SwapRequest from "../screens/requests/SwapRequest";
import ScheduleChanageRequest from "../screens/requests/ScheduleChanageRequest";

import WhosOnLeave from "../screens/requests/WhosOnLeave";
import WhatsMyCoverage from "../screens/requests/WhatsMyCoverage";
import {UserLeaveDetail} from "../components/UserLeaveDetail";
import NotificationHome from "../screens/notification/NotificationHome";
import MoreHome from "../screens/more/MoreHome";
import FullScheduleList from "../screens/schedule/FullScheduleList";
import ScheduleByCoverage from "../screens/schedule/ScheduleByCoverage";
import BidRequest from "../screens/requests/BidRequest";
import AssignmentMore from "../screens/schedule/AssignmentMore";

const url = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
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
        fontSize: 19,
        marginLeft: Platform.OS === 'ios' ? -10 : 10
    },
    headerTintColor: 'white',
    headerBackTitle: null
};


const defaultTabs = {
    labelStyle: {
        fontSize: 14
    },
    indicatorStyle: {
        borderColor: 'lightgray',
        borderWidth: 2,
    },
    style: {
        backgroundColor: '#3D6DCC'
    },
    tabStyle: {
        padding: 0,
        height:40,
    }
};

export const LeaveApproveTabBar = new TabNavigator(
    {
        whosOnLeave: {
            screen: WhosOnLeave,
            navigationOptions: {
                tabBarLabel: 'Who\'s on Leave'
            }
        },
        whatsMyCoverage: {
            screen: WhatsMyCoverage,
            navigationOptions: {
                tabBarLabel: 'What\'s my Coverage',
            }
        },
    },
    {
        tabBarOptions: {
            header: null,
            ...defaultTabs,
            activeTintColor: '#ffffff',
            inactiveTintColor: '#bfbfbf',

        },
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
    }
);


export const LeaveTypeBarComponent = new TabNavigator(
    {
        leaveRequest: {
            screen: LeaveRequest,
                navigationOptions: {
                    tabBarLabel: 'Leave'
                }
        },
        swapRequest: {
            screen: SwapRequest,
                navigationOptions: {
                    tabBarLabel: 'Swap',
                }
        },
        bidRequest: {
            screen: BidRequest,
                navigationOptions: {
                    tabBarLabel: 'Bid',
                }
        },
        schChangeRequest: {
            screen: ScheduleChanageRequest,
                navigationOptions: {
                    tabBarLabel: 'Sch.',
                }
        },
    },

    {
        tabBarOptions: {
            header: null,
            ...defaultTabs

        },
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        backBehavior: 'none',
    }
);

//bottom navigation tab bar settings
export const TabBarComponent = new TabNavigator(
    {
        DashBoardHome: {
            screen: DashBoardHome,
            navigationOptions: {
                header: null,
                title: "DashBoard",
                tabBarIcon : ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-podium' : 'ios-podium-outline'}
                        size={26}
                        style={{ color: '#264d9b' }}
                    />
                ),
            }
        },
        RequestsHome: {
            screen: RequestsHome,
            navigationOptions: {
                tabBarLabel: 'Request',
                tabBarIcon : ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-megaphone' : 'ios-megaphone-outline'}
                        size={26}
                        style={{ color: '#264d9b' }}
                    />
                ),

            }
        },
        ScheduleHome: {
            screen: ScheduleHome,
            navigationOptions: {
                tabBarLabel: 'Schedule',
                tabBarIcon : ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
                        size={26}
                        style={{ color: '#264d9b' }}
                    />
                ),
            }
        },
        NotificationHome: {
            screen: NotificationHome,
            navigationOptions:{
                tabBarLabel: 'Notification',
                tabBarIcon : ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
                        size={26}
                        style={{ color: '#264d9b' }}
                    />
                ),

            }
        },
        Settings: {
            screen: MoreHome,
            navigationOptions: {
                tabBarLabel: 'More',
                tabBarIcon : ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-more' : 'ios-more-outline'}
                        size={26}
                        style={{ color: '#264d9b' }}
                    />
                ),
            }
        },
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

export const FullScheduleComponent = new TabNavigator(
    {
        FullSchedule: {
            screen: FullScheduleList,
            navigationOptions: {
                tabBarLabel: 'Schedule'
            }
        },
        FullCoverage: {
            screen: ScheduleByCoverage,
            navigationOptions: {
                tabBarLabel: 'Coverage',
            }
        },

    },

    {
        tabBarOptions: {
            header: null,
            ...defaultTabs

        },
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        backBehavior: 'none',
    }
);
export const HomeMainNavigationStack = StackNavigator({
    leaveTypeBar: { screen: LeaveTypeBarComponent,
        navigationOptions: {
            title:"Request List"
        }
    },
    tabBar: { screen: TabBarComponent,
        navigationOptions: {
            header: null
        }
    },
    assignmentMoreInfo: { screen: AssignmentMore,
        navigationOptions: ({ navigation }) => ({
            header:(<View style={{flexDirection:'row',height:50,backgroundColor:'#3D6DCC'}}>
                <View style={{flex:0.2, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Ionicons name='ios-arrow-round-back-outline' size={40} color={'white'} style={{paddingRight: 8}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.6,justifyContent:'center'}}>
                    <Text style={{ fontSize:19, fontWeight:'bold', color:'#f7f5fb'}}>{navigation.state.params.isFullSchedule?'Process Shift':'My Shift'}</Text>
                </View>
            </View>)
        })
    },
    fullScheduleBar: { screen: FullScheduleComponent,
        navigationOptions: ({ navigation }) => ({
            header:(<View style={{flexDirection:'row',height:50,backgroundColor:'#3D6DCC'}}>
                <View style={{flex:0.2, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Ionicons name='ios-arrow-round-back-outline' size={40} color={'white'} style={{paddingRight: 8}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.6, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize:19, fontWeight:'bold', color:'#f7f5fb'}}>Unit Schedule</Text>
                </View>
            </View>)
        })
    },
    leaveApproveTabBar: { screen: LeaveApproveTabBar,
        navigationOptions: ({ navigation }) => ({
            header:(// Your custom header
                <View style={{
                    height:140
                }}>

                        <View style={{flexDirection:'row', backgroundColor:'#3D6DCC',justifyContent: 'center', alignItems: 'center', height:60}}>
                            <View style={{flex:0.2, justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => navigation.goBack()} >
                                <Ionicons name='ios-arrow-round-back-outline' size={40} color={'white'} style={{paddingRight: 8}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:0.8, justifyContent: 'center', alignItems: 'flex-start'}}>
                                <Text style={{ fontSize:19, fontWeight:'bold', color:'#f7f5fb'}}>Process Request</Text>
                            </View>
                        </View>

                    <UserLeaveDetail
                        request={navigation.state.params.request}
                        hostUrl={navigation.state.params.hostUrl}
                    />
                </View>
            ),
        })
    }
},{
    initialRouteName: 'tabBar',
        mode: 'card',
        headerMode: 'screen',
        navigationOptions: {
    ...defaultHeader
    }
});

//login screen navigation
export const MainNavigation = StackNavigator({
    login: { screen: Login,
        navigationOptions: {
            header: null
        }
    },
    homeMainNav: { screen: HomeMainNavigationStack,
            navigationOptions: {
                header: null
        }
    },
});



export default MainNavigation;

