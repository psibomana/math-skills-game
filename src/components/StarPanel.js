import React, { Component } from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';
import '../App.css';

class StarPanel extends Component {

  render() {
    let stars = [], i = 0;
    while (++i <= this.props.starNumbers) stars.push(i);
    return (
        <Panel bsStyle="info">
            <Panel.Body>
                {stars.map((star, i) => <Glyphicon style={{"fontSize":"70px"}} glyph="star" key={i}/>)}
            </Panel.Body>
        </Panel>
    );
  }
}

export default StarPanel;
