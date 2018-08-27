

import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Avatar, Icon} from "react-native-elements";
import React, {Component} from 'react';
import moment from 'moment'
export function SetMatchData(matchList) {
    let returnElemArray=[];
    if(matchList){
        for(let i=0;i<matchList.length;i++ ){
            returnElemArray.push(<MatchDetail key={i} match={matchList[i]}/>)
        }
    }
    return returnElemArray
}

export function MatchDetail({match}) {
    return (
        <TouchableOpacity >
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View>

                    </View>
                    <View style={{
                        flex: 4,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingLeft: 5,
                        marginLeft: 10
                    }}>
                        <View style={{paddingBottom: 5}}>
                            <Text > {moment(match.date).format('MM-DD-YYYY')}</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: '#8c7f7f',
                                fontSize: 15,
                                marginTop: 1
                            }}>{match.format}</Text>
                        </View>
                        <View>
                            <Text>{match.season}</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                        <View>
                            <Text style={{
                                paddingBottom: 5,
                                alignItems: 'flex-end'
                            }}>{match.moreDetails}</Text>
                        </View>
                        <View>
                            {match.statusOverview=="IN_PLAY"?<View><View><Text>{match.currentStatus.bowling_team} - {match.currentStatus.wickets} W</Text></View><View><Text>{match.currentStatus.batting_team} - {match.currentStatus.runsString}</Text></View></View>:<View></View>}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
}


export const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingTop: 5,
        height: 120
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    subtitle1: {
        paddingLeft: 10,
        color: 'grey'
    },
    test: {
        fontSize: 19
    },
    subtitleViewBox: {
        flexDirection: 'row'
    },
    subtitleColumn: {
        flex: 1,
        height: 70,
        //alignItems:'center'
    },
    avatar: {
        width: 50,
        height: 50,
    },
    container: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: '#bbb',
        borderBottomWidth: 0,
        backgroundColor: '#fefffb',
    },
    wrapper: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
    title: {
        fontSize: 14,
        color: '#43484d',
        alignItems: 'center'
    },
    subtitle: {
        color: '#000000',
        fontSize: 17,
        marginTop: 1,
        // textDecorationLine: 'line-through', textDecorationStyle: 'solid'
    },
    dashBoardTitle: {
        color: '#73bed0',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 1,
    },
    fullyCancel: {
        textDecorationLine: 'line-through', textDecorationStyle: 'solid',
        color: '#bf0600'

    },
    partiallyCancel: {
        textDecorationLine: 'line-through', textDecorationStyle: 'dotted',
    },
    temp: {},
    date: {
        alignItems: 'flex-end'
    }
});