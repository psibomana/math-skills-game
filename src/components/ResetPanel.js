import React, { Component } from 'react';
import {Panel, ButtonToolbar, Button} from 'react-bootstrap';
import '../App.css';

class ResetPanel extends Component {

  render() {
    return (
      <Panel bsStyle="info">
        <Panel.Heading>{this.props.gameStatus}</Panel.Heading>
        <Panel.Body>
          <ButtonToolbar>
            <Button
                bsStyle="primary"
                onClick={this.props.handleRestart}>
              Restart
            </Button>
          </ButtonToolbar>
        </Panel.Body>
      </Panel>
    );
  }
}

export default ResetPanel;
