import React, { Componenet } from 'react';
import { View ,TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';


class LoginForm extends Componenet {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput style={{ height: 20, width: 100 }} />
                </CardSection>


                <CardSection />
                
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>                
            </Card>
        );
    }
};

export default LoginForm;