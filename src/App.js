import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'
class App extends Component {
    componentWillMount() {
        // FIREBASE SETUP
        firebase.initializeApp({
            apiKey: "AIzaSyAmoflilxejHj3V_5T6zZmmJes2b5itAiQ",
            authDomain: "auth-eb0a6.firebaseapp.com",
            databaseURL: "https://auth-eb0a6.firebaseio.com",
            projectId: "auth-eb0a6",
            storageBucket: "auth-eb0a6.appspot.com",
            messagingSenderId: "684725270297",
            appId: "1:684725270297:web:d17aae285ea16c03"             
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
