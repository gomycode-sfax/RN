import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { NativeRouter, Route, Switch } from "react-router-native";
import {NativeRouter, Route, Switch} from 'react-router-native'
import Main from './Components/Main'
import Login from './Components/Login'
import Home from './Components/Home'
import Signup from './Components/Signup'
import About from './Components/About'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NativeRouter>
        <View >
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/About" component={About} />
          </Switch>
        </View>
      </NativeRouter>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
