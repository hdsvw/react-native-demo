import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import Ionicons from "react-native-vector-icons/Ionicons";
import Dimensions from 'Dimensions';

const {width, height} = Dimensions.get('window');
const scrollHeight = height - 110;
const scrollWidth = width + 50;

export class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }


    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', height: 50, backgroundColor: '#3D6DCC',justifyContent: 'center', alignItems: 'center'}}>

                    <View style={{justifyContent: 'center',alignItems:'center'}}>
                        <Text style={{fontSize: 19, fontWeight: 'bold', color: '#f7f5fb',textAlign:'center'}}>{this.props.name}</Text>
                    </View>
                </View>
            </View>


        );
    }


}

const styles = StyleSheet.create({});

