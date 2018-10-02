import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import _ from 'lodash';
import '../App.css';

class SelectedNumbersPanel extends Component {
  render() {
    let selectedNumbers = _.sortBy(this.props.selectedNumbers);
    return (
        <Panel id="numbers-panel" bsStyle="info" className="text-center">
            <Panel.Body>
                {selectedNumbers.map((selected) => {
                    return (
                        <span 
                            key={selected} 
                            className="number" 
                            onClick={this.props.handleOnNumberUnSelected.bind(null, selected)}
                        >
                        {selected}
                        </span>)
                })}
            </Panel.Body>
        </Panel>
    );
  }
}

export default SelectedNumbersPanel;
