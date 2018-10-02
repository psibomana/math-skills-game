import React, { Component } from 'react';
import {Panel, ButtonToolbar, Button} from 'react-bootstrap';
import '../App.css';

class OperationPanel extends Component {
  render() {
    return (
        <Panel bsStyle="info">
          <Panel.Body>  
            <ButtonToolbar>
              <Button bsStyle="primary" block>Confirm</Button>
              <Button 
                bsStyle="warning" 
                onClick={this.props.handleRefresh} 
                disabled={this.props.remainingRefresh === 0} 
                block>
                Redraw ({this.props.remainingRefresh}/{this.props.maxRefresh})
              </Button>
            </ButtonToolbar>
          </Panel.Body>
        </Panel>
    );
  }
}

export default OperationPanel;
