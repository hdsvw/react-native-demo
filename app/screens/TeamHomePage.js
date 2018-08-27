import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import Ionicons from "react-native-vector-icons/Ionicons";
import Dimensions from 'Dimensions';
import {HeaderBar} from "./Header";
import {MatchTile, SetMatchData} from "./MatchTile";
import {getMatchData} from "../CommonFunctions";
// import {getMatchData} from "../commonFunctions";

const {width, height} = Dimensions.get('window');
const scrollHeight = height - 110;
const scrollWidth = width + 50;

export class TeamHomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: [],
            routeName:this.props.navigation.state.routeName
        };

    }

    componentWillMount() {
        this.getData()
    }


    render() {
        return (
            <View>
                <View>
                    <HeaderBar name={this.state.routeName=="LiveMatches"?"Live Matches":this.state.routeName=="UpComingMatches"?"UpComing Matches":"Past Matches"}/>
                </View>
                <View>
                    {SetMatchData(this.state.matches)}
                </View>
            </View>



        );
    }

    getData() {
        let status="";
        if(this.state.routeName=="LiveMatches"){
            status="STARTED";
        }else if(this.state.routeName=="UpComingMatches"){
            status="NOT_STARTED"
        }
        else{
            status="COMPLETED"
        }

        axios.get("http://192.168.8.102:8102/init/getTeamData", {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            params: {
                status: status
            },
        }).then((responseData) => {

            this.setState({
                matches: responseData.data.matches
            })

        })
            .catch((error) => {
                console.warn(error);
                return false;
            });

    }


}

const styles = StyleSheet.create({});

