import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import classNames from 'classnames';


class PrinciplesProgress extends Component {
    satisfiedPercent() {
        let { principles, password } = this.props;
        let satisfiedCount = 
        principles.map(p => p.predicate(password)).reduce((count, satisfied) => count + (satisfied ? 1 : 0) , 0);
        let principlesCount = principles.length;
        return (satisfiedCount / principlesCount) * 100.0;
    }

    progressColor() {
        let percentage = this.satisfiedPercent();
        return classNames({
            danger: (percentage < 33.4),
            success: (percentage >= 66.7),
            warning: (percentage >= 33.4 && percentage < 66.7)
            });
        }

     render() {
        return (
        <ProgressBar now={this.satisfiedPercent()}
        bsstyle={this.progressColor()} />
        );
    }
}

export default PrinciplesProgress;