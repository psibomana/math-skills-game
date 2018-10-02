import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import _ from 'lodash';
import StarPanel from './components/StarPanel';
import NumbersPanel from './components/NumbersPanel';
import OperationPanel from './components/OperationPanel';
import SelectedNumbersPanel from './components/SelectedNumbersPanel';
import ResetPanel from './components/ResetPanel';
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
    this.handleRestart = this.handleRestart.bind(this);
    this.updateGameStatus = this.updateGameStatus.bind(this);
    this.possibleCombinationSum = this.possibleCombinationSum.bind(this);
    this.possibleSolutions = this.possibleSolutions.bind(this);

    this.state = {
      title: "Math Skills Game",
      starNumbers: _.random(1, 9),
      numberOptions: 9, // From 1 to 9
      selectedNumbers: [],
      confirmedNumbers: [],
      maxRefresh: 5,
      remainingRefresh: 5,
      canConfirm: false,
      gameStatus: "playing"
    }
  }

  handleRefresh() {
    if(this.state.remainingRefresh > 0) {
      this.setState((state) => {
        return {
          remainingRefresh: this.state.remainingRefresh - 1,
          starNumbers: _.random(1, 9),
        }
      }, this.updateGameStatus);
    }
  }

  handleOnNumberSelected(number) {
    this.setState((state) => {
      return {
        selectedNumbers: this.state.selectedNumbers.concat(number)
      }
    }, this.updateGameStatus);
  }

  handleOnNumberUnSelected(unselected) {
    this.setState((state) => {
      return {
        selectedNumbers: this.state.selectedNumbers.filter(number => number !== unselected)
      }
    }, this.updateGameStatus);
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

  handleRestart() {
    this.setState((state) => {
      return {
        starNumbers: _.random(1, 9),
        numberOptions: 9, // From 1 to 9
        selectedNumbers: [],
        confirmedNumbers: [],
        maxRefresh: 5,
        remainingRefresh: 5,
        canConfirm: false,
        gameStatus: "playing"
      }
    })
  }

  possibleCombinationSum(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return this.possibleCombinationSum(arr, n);
    }
    let listSize = arr.length, combinationsCount = (1 << listSize)
    for (let i = 1; i < combinationsCount; i++) {
        let combinationSum = 0;
        for (let j = 0; j < listSize; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) { return true; }
    }
    return false;
  }

  possibleSolutions() {
    let numberOfStars = this.state.starNumbers;
    let possibleNumbers = [];

    for (let index = 1; index <= 9; index++) {
        if (!this.state.confirmedNumbers.includes(index)) {
            possibleNumbers.push(index);
        }
    }

    return this.possibleCombinationSum(possibleNumbers, numberOfStars);
  }

  updateGameStatus() {
    if (this.state.confirmedNumbers.length === 9) {
        this.setState({
            gameStatus: "Congratulations, You Won!"
        });
    }
    else if (this.state.remainingRefresh === 0 && !this.possibleSolutions()) {
        this.setState({
            gameStatus: "You Lost!"
        });
    }
  }

  render() {

    let GamePanel = () => {
      if(this.state.gameStatus === 'playing') {
        return (
          <NumbersPanel
            handleOnNumberSelected={this.handleOnNumberSelected}
            selectedNumbers={this.state.selectedNumbers}
            confirmedNumbers={this.state.confirmedNumbers}/>
        );
      } else {
        return (
          <ResetPanel
            handleRestart={this.handleRestart}
            gameStatus={this.state.gameStatus}
            />
        )
      }
    }

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
            <GamePanel />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
