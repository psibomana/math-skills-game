import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import _ from 'lodash';
import StarPanel from './components/StarPanel';
import CustomPanel from './components/CustomPanel';
import NumbersPanel from './components/NumbersPanel';
import OperationPanel from './components/OperationPanel';
import './App.css';


const Title = (props) => {
  return <PageHeader className = "text-monospace"><center> {props.title}</center></PageHeader>
}

class App extends Component {

  constructor() {
    super();

    this.handleRefresh = this.handleRefresh.bind(this);

    this.state = {
      "title": "Math Skills Game", 
      "starNumbers": _.random(1, 9), 
      "numberOptions": 9, // From 1 to 9
      "selectedNumbers" : [],
      "remainingRefresh": 5
    }
  }

  handleOnNumberSelect(selectedNumber) {
    console.log(selectedNumber);
    console.log(this.state.selectedNumbers);
  }

  handleRefresh() {
    if(this.state.remainingRefresh > 0) {
      this.setState({
        "remainingRefresh": this.state.remainingRefresh - 1,
        "starNumbers": _.random(1, 9), 
      });
    }
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
              remainingRefresh={this.state.remainingRefresh} 
              />
          </Col>
          <Col md={5}>
            <CustomPanel />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={12}>
            <NumbersPanel />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
