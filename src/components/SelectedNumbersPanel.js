import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import _ from 'lodash';
import '../App.css';

class SelectedNumbersPanel extends Component {

    handleOnNumberUnSelected = (event) => {
        const id = parseInt(event.target.id, 10);
        this.props.handleOnNumberUnSelected(id);
    }

    render() {
        let selectedNumbers = _.sortBy(this.props.selectedNumbers);
        return (
            <Panel id="numbers-panel" bsStyle="info" className="text-center">
                <Panel.Body>
                    {selectedNumbers.map((selected) => {
                        return (
                            <span 
                                key={selected} 
                                id={selected}
                                className="number" 
                                onClick={this.handleOnNumberUnSelected}
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
