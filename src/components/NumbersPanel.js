import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import '../App.css';

class NumbersPanel extends Component {
  render() {
    let numbers = [];
    for (let i = 1; i <= 9; i++) {
        if(!this.props.selectedNumbers.includes(i)) {
            numbers.push(
                <span 
                    key={i} 
                    className="number" 
                    onClick={this.props.handleOnNumberSelected.bind(null, i)}>
                    {i}
                </span>
            );
        }
    }
    return (
        <Panel id="numbers-panel" bsStyle="info" className="text-center">
            <Panel.Body>{numbers}</Panel.Body>
        </Panel>
    );
  }
}

export default NumbersPanel;
