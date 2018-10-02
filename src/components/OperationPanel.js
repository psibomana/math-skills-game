import React, { Component } from 'react';
import {Panel, ButtonToolbar, Button} from 'react-bootstrap';
import '../App.css';

class OperationPanel extends Component {

  constructor() {
    super();
    this.isValidSelection = this.isValidSelection.bind(this);
    this.getConfirmationStatusMessage = this.getConfirmationStatusMessage.bind(this);
    this.getConfirmationStatusStyle = this.getConfirmationStatusStyle.bind(this);
    this.canConfirm = this.canConfirm.bind(this);
  }

  getConfirmationStatusMessage() {
    if(Boolean(this.props.selectedNumbers.length)) {
      return (this.isValidSelection() ? 'Confirm?' : 'Incorrect Selection');
    } else {
      return 'Validate';
    }
  }

  getConfirmationStatusStyle() {
    if(Boolean(this.props.selectedNumbers.length)) {
      return (this.isValidSelection() ? 'success' : 'danger');
    } else {
      return 'primary';
    }
  }

  isValidSelection() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const selectedValues = this.props.selectedNumbers.reduce(reducer);
    return Boolean(this.props.starNumbers === selectedValues);
  }

  canConfirm() {
    return (Boolean(this.props.selectedNumbers.length) && this.isValidSelection());
  }

  render() {
    const {
      selectedNumbers,
      confirmSelection,
      remainingRefresh,
      maxRefresh,
      handleRefresh
    } = this.props;

    return (
        <Panel bsStyle="info">
          <Panel.Body>
            <ButtonToolbar>
              <Button
                bsStyle={this.getConfirmationStatusStyle()}
                disabled={!Boolean(selectedNumbers.length) || (!this.canConfirm())}
                onClick={confirmSelection}
                block>
                  {this.getConfirmationStatusMessage()}
                </Button>
              <Button
                bsStyle="warning"
                onClick={handleRefresh}
                disabled={remainingRefresh === 0}
                block>
                  Redraw ({remainingRefresh}/{maxRefresh})
              </Button>
            </ButtonToolbar>
          </Panel.Body>
        </Panel>
    );
  }
}

export default OperationPanel;
