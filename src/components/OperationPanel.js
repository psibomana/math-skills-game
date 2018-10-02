import React, { Component } from 'react';
import {Panel, ButtonToolbar, Button} from 'react-bootstrap';
import '../App.css';

class OperationPanel extends Component {
  render() {
    return (
        <Panel bsStyle="info">
          <Panel.Body>  
            <ButtonToolbar>
              <Button bsStyle="success" block>Confirm</Button>
              <Button bsStyle="warning" onClick={this.props.handleRefresh}  block>Redraw ({this.props.remainingRefresh})</Button>
            </ButtonToolbar>
          </Panel.Body>
        </Panel>
    );
  }
}

export default OperationPanel;
