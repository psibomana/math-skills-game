import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import _ from 'lodash';
import StarPanel from './components/StarPanel';
import NumbersPanel from './components/NumbersPanel';
import OperationPanel from './components/OperationPanel';
import SelectedNumbersPanel from './components/SelectedNumbersPanel';
import './App.css';


const Title = (props) => {
  return <PageHeader className = "text-monospace"><center> {props.title}</center></PageHeader>
}

class App extends Component {

  constructor() {
    super();

    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleOnNumberSelected = this.handleOnNumberSelected.bind(this);
    this.handleOnNumberUnSelected = this.handleOnNumberUnSelected.bind(this);
    this.handleConfirmSelection = this.handleConfirmSelection.bind(this);

    this.state = {
      title: "Math Skills Game",
      starNumbers: _.random(1, 9),
      numberOptions: 9, // From 1 to 9
      selectedNumbers: [],
      confirmedNumbers: [],
      maxRefresh: 5,
      remainingRefresh: 5,
      canConfirm: false
    }
  }

  handleRefresh() {
    if(this.state.remainingRefresh > 0) {
      this.setState((state) => {
        return {
          remainingRefresh: this.state.remainingRefresh - 1,
          starNumbers: _.random(1, 9),
        }
      });
    }
  }

  handleOnNumberSelected(number) {
    this.setState((state) => {
      return {
        selectedNumbers: this.state.selectedNumbers.concat(number)
      }
    });
  }

  handleOnNumberUnSelected(unselected) {
    this.setState((state) => {
      return {
        selectedNumbers: this.state.selectedNumbers.filter(number => number !== unselected)
      }
    });
  }

  handleConfirmSelection() {
    this.setState((state) => {
      return {
        confirmedNumbers: this.state.confirmedNumbers.concat(this.state.selectedNumbers),
        selectedNumbers: [],
        starNumbers: _.random(1, 9),
      }
    });
  }

  render() {
    return (
      <Grid>
        <Title title={this.state.title}/>
        <Row className="show-grid">
          <Col md={5}>
            <StarPanel starNumbers={this.state.starNumbers}/>
          </Col>
          <Col md={2}>
            <OperationPanel
              handleRefresh={this.handleRefresh}
              maxRefresh={this.state.maxRefresh}
              starNumbers={this.state.starNumbers}
              remainingRefresh={this.state.remainingRefresh}
              selectedNumbers={this.state.selectedNumbers}
              confirmSelection={this.handleConfirmSelection}
              />
          </Col>
          <Col md={5}>
            <SelectedNumbersPanel
              selectedNumbers={this.state.selectedNumbers}
              handleOnNumberUnSelected={this.handleOnNumberUnSelected} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={12}>
            <NumbersPanel
              handleOnNumberSelected={this.handleOnNumberSelected}
              selectedNumbers={this.state.selectedNumbers}
              confirmedNumbers={this.state.confirmedNumbers}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
