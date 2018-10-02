import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import '../App.css';

class NumbersPanel extends Component {
  render() {
    let numbers = [];
    for (let i = 1; i <= 9; i++) {
        numbers.push(<span key={i} className="number" >{i}</span>);
    }
    return (
        <Panel id="numbers-panel" bsStyle="info" className="text-center">
            <Panel.Body>{numbers}</Panel.Body>
        </Panel>
    );
  }
}

export default NumbersPanel;
