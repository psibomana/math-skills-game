import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import '../App.css';

class NumbersPanel extends Component {

  handleNumberClick = (event) => {
      const id = parseInt(event.target.id, 10);
      if(!this.props.confirmedNumbers.includes(id)) {
        this.props.handleOnNumberSelected(id);
      }
  }

  getNumbers = () => {
    let numbers = [];
    for (let i = 1; i <= 9; i++) {
      let className = "number";
      if(this.props.confirmedNumbers.includes(i)) {
        className += " confirmed";
      } else if (this.props.selectedNumbers.includes(i)) {
        continue;
      }

      numbers.push(
          <span
              key={i}
              id ={i}
              className={className}
              onClick={this.handleNumberClick}>
              {i}
          </span>
      );
    }
    return numbers;
  }

  render() {
    return (
        <Panel id="numbers-panel" bsStyle="info" className="text-center">
            <Panel.Body>{this.getNumbers()}</Panel.Body>
        </Panel>
    );
  }
}

export default NumbersPanel;
