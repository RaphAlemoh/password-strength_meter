import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PasswordField from './PasswordField';
import StrengthMeter from './StrengthMeter';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        
        const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
        const DIGIT_REGEX = /[0-9]/;
    
        PasswordInput.defaultProps = {
            goodPasswordPrinciples: [
            {
                id: 1,
                label: "6+ characters",
                predicate: password => password.length >= 6
             },
             {
                id:2,
                label: "with at least one digit",
                predicate: password => password.match(DIGIT_REGEX) !== null
             },
             {
                id:3,
                label: "with at least one special character",
                predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null
             }
            ]
        };
        this.state = { password: '' };
        this.changePassword = this.changePassword.bind(this);
    }

    changePassword(password) {
        this.setState({ password });
    }

    render() { 

        let { goodPasswordPrinciples } = PasswordInput.defaultProps;
        let { password } = this.state;
        

        return (
        <Container>
            <Row>
                <Col md={8}>
                    <PasswordField password={password}
                    onPasswordChange={this.changePassword} 
                    principles={goodPasswordPrinciples}
                    />
                </Col>
                <Col md={4}>
                    <StrengthMeter principles={goodPasswordPrinciples} 
                    password = { password } />
                </Col>
            </Row>
        </Container>
        );

    }
}

export default PasswordInput;