import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import _ from 'lodash';
import StarPanel from './components/StarPanel';
import CustomPanel from './components/CustomPanel';
import './App.css';


const Title = (props) => {
  return <PageHeader className = "text-monospace"><center> {props.title}</center></PageHeader>
}

class App extends Component {
  state = {
    "title": "Math Skills Game", 
    "starNumbers": _.random(1, 9)
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
            <CustomPanel />
          </Col>
          <Col md={5}>
            <CustomPanel />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={12}>
            <CustomPanel />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
