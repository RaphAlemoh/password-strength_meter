import React from 'react';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';

class PasswordField extends React.Component {
    constructor(props) {
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handlePasswordChange(ev) {
        let { onPasswordChange } = this.props;
        onPasswordChange(ev.target.value);
    }

    satisfiedPercent() {
        let { principles, password } = this.props;
        let satisfiedCount = principles.map(p => p.predicate(password))
        .reduce((count, satisfied) =>
        count + (satisfied ? 1 : 0), 0);
        let principlesCount = principles.length;
        return (satisfiedCount / principlesCount) * 100.0;
    }

    inputColor() {
        let percentage = this.satisfiedPercent();
        return classNames({
            error: (percentage < 33.4),
            success: (percentage >= 66.7),
            warning: (percentage >= 33.4 && percentage < 66.7)
        });
    }

    render() { 
    let { password } = this.props;
        return (
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        label='Password' 
                        value={password}
                        bsstyle={this.inputColor()}
                        onChange={this.handlePasswordChange}
                        hasfeedback />                       
                </Form.Group>
            </Form>
        );        
     }
}

export default PasswordField;