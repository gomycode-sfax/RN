import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Link, NativeRouter, } from 'react-router-native';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View >
                <Image style={{ height: 300, width: 300 }} source={{ uri: 'https://i.imgur.com/EzAQKcy.png' }} />
                <Button title="Login" onPress={() => this.props.history.push('/Login')} />

            
                <Button title="About" onPress={() => this.props.history.push('/About')} />

            </View>
        )
    }
}

export default Main;
