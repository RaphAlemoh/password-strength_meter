import React from 'react';
import { Card } from 'react-bootstrap';
import PrinciplesProgress from './PrinciplesProgress';
import PrinciplesList from './PrinciplesList';


export default class StrengthMeter extends React.Component {
     render() {
        return(
            <Card>
                <PrinciplesProgress {...this.props} />
                <h5>A good password is:</h5>
                <PrinciplesList {...this.props} />
            </Card>
        );
    }
}