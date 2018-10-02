import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import '../App.css';

class CustomPanel extends Component {
  render() {
    return (
        <Panel bsStyle="info">
            <Panel.Body>Basic panel example</Panel.Body>
        </Panel>
    );
  }
}

export default CustomPanel;
