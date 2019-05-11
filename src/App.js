import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import { Header, Button, Card, CardSection, Spinner } from './components/common';

class App extends Component {
   state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return(
                    <Card>
                    <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                    </Button>
                    </CardSection>
                </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return(
                    <View style = {styles.spinStyle}>
                         <Spinner size="large"/>
                    </View>
                ); 
               
        }
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinStyle: {
        marginTop: '50%'
    }
}

export default App;
