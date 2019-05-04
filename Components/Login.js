import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { NativeRouter,Link } from "react-router-native";


export default class Note extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            signInEmail:' ',
            signInPw:' ',

        }
    }

    render(){
        return(
            <View>
                <Text>Email</Text>
                <TextInput
                        underlineColorAndroid='transparent'
                        placeholder=' '
                        placeholderTextColor='white'
                        onChangeText={(signInEmail) => this.setState({ signInEmail: signInEmail })}
                        value={this.state.signInEmail}
                    />
                <Text>Password</Text>
                <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='type here'
                        placeholderTextColor='white'
                        onChangeText={(signInPw) => this.setState({ signInPw: signInPw })}
                        value={this.state.signInPw}
                    />
                <Button title="Log in" onPress={() => this.props.history.push('/')} />
                <Button title="Don't have account?" onPress={() => this.props.history.push('/Signup')} />
            </View>
        )
    }
}